import css from './index.module.css'
import { Container, GamesGrid, Layout, Slider } from 'components'
import { PaginatedItems } from 'components/Paginate'
import { RAWG_ALL_GAMES } from 'services'

export async function getServerSideProps() {
  const res = await fetch(RAWG_ALL_GAMES)

  const data = await res.json()

  return { props: { data } }
}

export default function Explore(props) {
  console.log(props)
  return (
    <Layout title="AspectX | Explore">
      <Container gap>
        <PaginatedItems itemsPerPage={9} initial={props.data} />
      </Container>
    </Layout>
  )
}
