import { Container, GamesGrid, Layout } from 'components'
import Image from 'next/image'
import css from './styles.module.css'
import { IoIosImages } from 'react-icons/io'
import { RAWG_FIND_CREATOR, RAWG_FIND_CREATOR_GAMES } from 'services'
import { getPlaiceholder } from 'plaiceholder'
import Page404 from 'pages/404'

export async function getServerSideProps({ params }) {
  const [devRes, devGamesRes] = await Promise.all([
    fetch(RAWG_FIND_CREATOR(params.id)),
    fetch(RAWG_FIND_CREATOR_GAMES(params.id)),
  ])

  const [dev, rawGames] = await Promise.all([devRes.json(), devGamesRes.json()])

  const games = await Promise.all(
    rawGames.results?.map(async game => {
      const { base64, img } = await getPlaiceholder(
        game.background_image
          ? game.background_image
          : 'https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg',
      )

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

  if (props.dev.detail === 'Not found.') {
    return <Page404 />
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
      {props.games && (
        <Container gap>
          <GamesGrid games={props.games} />
        </Container>
      )}
    </Layout>
  )
}
