import { Container, Layout } from 'components'
import { PaginatedGames } from 'components'
import { RAWG_ALL_GAMES } from 'services'

export async function getStaticProps() {
  const res = await fetch(RAWG_ALL_GAMES)

  const data = await res.json()

  return { props: { data } }
}

export default function Explore(props) {
  return (
    <Layout
      title="AspectX | Explore"
      desc="Start exploring and find an awesome videogame"
      url="explore"
    >
      <Container gap>
        <PaginatedGames itemsPerPage={12} initial={props.data} />
      </Container>
    </Layout>
  )
}
