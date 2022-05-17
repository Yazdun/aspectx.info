import css from './index.module.css'
import { Container, GamesGrid, Layout, Slider } from 'components'
import mock from 'mocks/trendings.json'
import { ErrorBoundary } from 'react-error-boundary'

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
        <div className={css.container}>
          <Container gap>
            <h1>Trending right now</h1>
          </Container>
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
