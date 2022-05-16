import css from './index.module.css'
import { Container, GamesGrid, GamePrev, Layout } from 'components'
import mock from 'mocks/trendings.json'

export default function Trending() {
  const { results: games } = mock
  return (
    <Layout title="AspectX | Trending">
      <Container gap>
        <GamesGrid games={games} />
      </Container>
    </Layout>
  )
}
