import css from './index.module.css'
import { Container, GamesGrid, Layout, Slider } from 'components'
import mock from 'mocks/trendings.json'
import { ErrorBoundary } from 'react-error-boundary'
import { Fire1 } from 'assets'
import Image from 'next/image'

export default function Trending() {
  const { results: games } = mock
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        console.log('error')
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

function ErrorFallback({ error }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
    </div>
  )
}
