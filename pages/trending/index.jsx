import css from './index.module.css'
import { Container, GamesGrid, Layout, Slider } from 'components'
import { useState } from 'react'
import mock from 'mocks/trendings.json'
import { Fire1 } from 'assets'
import Image from 'next/image'
import { getPlaiceholder } from 'plaiceholder'
import { ErrorBoundary } from 'react-error-boundary'

export async function getServerSideProps() {
  const res = await fetch(
    `https://api.rawg.io/api/games?dates=2022-10-10,2023-10-10&ordering=-added&key=8e549c513551423faf843bc8b968950d`,
  )

  const data = await res.json()

  const games = await Promise.all(
    data.results?.map(async game => {
      const { base64, img } = await getPlaiceholder(game.background_image)

      return {
        ...img,
        ...game,
        blurDataURL: base64,
      }
    }),
  )

  return { props: { data, games } }
}

export default function Trending(props) {
  const [games, setGames] = useState(props.games || [])

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // reset the state of your app so the error doesn't happen again
      }}
    >
      <Layout title="AspectX | Trending">
        <Container gap sx={css.header}>
          <div className={css.image}>
            <Image src={Fire1} alt="" />
          </div>
          <h1 className={css.title}>Trending Right Now</h1>
          <p>Trended games are based on our player counts and release date</p>
        </Container>
        <div className={css.container}>
          <Slider slides={games.slice(0, 8)} />
        </div>
        <Container gap>
          <GamesGrid games={games.slice(8)} />
        </Container>
      </Layout>
    </ErrorBoundary>
  )
}

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}
