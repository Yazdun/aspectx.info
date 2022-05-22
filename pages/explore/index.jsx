import css from './index.module.css'
import { Container, GamesGrid, Layout, Slider } from 'components'
import json from 'mocks/trendings.json'
import { PaginatedItems } from 'components/Paginate'

export default function Explore() {
  return (
    <Layout title="AspectX | Explore">
      <Container gap>
        <PaginatedItems itemsPerPage={9} />
      </Container>
    </Layout>
  )
}
