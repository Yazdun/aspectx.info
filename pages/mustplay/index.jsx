import css from './index.module.css'
import { Container, GamesGrid, Layout, Slider } from 'components'
import { useState } from 'react'
import { getPlaiceholder } from 'plaiceholder'
import { ErrorBoundary } from 'react-error-boundary'
import { RAWG_HIGH_RATED_GAMES } from 'services'

export async function getStaticProps() {
  const res = await fetch(RAWG_HIGH_RATED_GAMES)
  const data = await res.json()

  const games = await Promise.all(
    data.results?.map(async game => {
      const { base64, img } = await getPlaiceholder(
        game.background_image
          ? game.background_image
          : 'https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg',
      )

      return {
        ...img,
        ...game,
        blurDataURL: base64,
      }
    }),
  )

  return { props: { games } }
}

export default function Mustplay(props) {
  const [games, setGames] = useState(props.games || [])

  console.log(games)
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Layout title="AspectX | MustPlay">
        <Container sx={css.header}>
          <h1 className={css.title}>Most Popular Games</h1>
        </Container>
        <div className={css.container}>
          <Slider slides={games.slice(0, 8)} />
        </div>
        <Container gap>
          <h2 className={css.title}>Our Recommendations</h2>
          <GamesGrid games={games.slice(8)} />
        </Container>
      </Layout>
    </ErrorBoundary>
  )
}

function ErrorFallback({ error }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
    </div>
  )
}
