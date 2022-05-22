import css from './index.module.css'
import { Container, GamesGrid, Layout, Slider } from 'components'
import json from 'mocks/trendings.json'
import { PaginatedItems } from 'components/Paginate'

export default function Explore() {
  const games = json.results.slice(0, 9)
  return (
    <Layout title="AspectX | Explore">
      <Container gap>
        <PaginatedItems itemsPerPage={5} />
      </Container>
    </Layout>
  )
}
