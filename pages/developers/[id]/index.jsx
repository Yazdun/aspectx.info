import { Container, GamesGrid, Layout } from 'components'
import Image from 'next/image'
import css from './styles.module.css'
import { IoIosImages } from 'react-icons/io'
import { RAWG_FIND_CREATOR, RAWG_FIND_CREATOR_GAMES } from 'services'
import { getPlaiceholder } from 'plaiceholder'

export async function getServerSideProps({ params }) {
  const [devRes, devGamesRes] = await Promise.all([
    fetch(RAWG_FIND_CREATOR(params.id)),
    fetch(RAWG_FIND_CREATOR_GAMES(params.id)),
  ])

  const [dev, rawGames] = await Promise.all([devRes.json(), devGamesRes.json()])

  const games = await Promise.all(
    rawGames.results?.map(async game => {
      const { base64, img } = await getPlaiceholder(game.background_image)

      return {
        ...img,
        ...game,
        blurDataURL: base64,
      }
    }),
  )

  return { props: { dev, games } }
}

export default function Dev(props) {
  const { name, image, description, rating, games_count } = props.dev

  function createMarkup() {
    return { __html: description }
  }

  return (
    <Layout title={name}>
      <Container gap>
        <div className={css.info}>
          <div className={css.image}>
            {image ? (
              <Image src={image} alt={name} layout="fill" objectFit="cover" />
            ) : (
              <IoIosImages className={css.noimage} />
            )}
          </div>
          <h1 className={css.name}>{name}</h1>
          <div
            className={css.desc}
            dangerouslySetInnerHTML={createMarkup()}
          ></div>
        </div>
      </Container>
      <Container gap>
        <GamesGrid games={props.games} />
      </Container>
    </Layout>
  )
}
