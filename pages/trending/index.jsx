import css from './index.module.css'
import { Container, GamesGrid, GamePrev, Layout, Slider } from 'components'
import mock from 'mocks/trendings.json'

export default function Trending() {
  const { results: games } = mock
  return (
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
  )
}
