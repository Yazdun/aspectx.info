import css from './index.module.css'
import { Container, GamesGrid, Layout, Slider } from 'components'
import mock from 'mocks/trendings.json'
import { Fire1 } from 'assets'
import Image from 'next/image'
// import { getPlaiceholder } from 'plaiceholder'

// export async function getServerSideProps() {
//   const res = await fetch(
//     `https://api.rawg.io/api/games?dates=2022-10-10,2023-10-10&ordering=-added&key=${process.env.API_KEY}`,
//   )
//   const data = await res.json()

//   return { props: { data } }
// }

export default function Trending(props) {
  // console.log(props.data.results)
  const { results: games } = mock
  return (
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
  )
}
