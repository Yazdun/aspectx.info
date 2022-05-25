import { Container, Layout, Requirements, Screenshots } from 'components'
import css from './styles.module.css'
import Image from 'next/image'
import { RAWG_GAME_SLUG, RAWG_GAME_SLUG_SCREENSHOTS } from 'services'
import Page404 from 'pages/404'

export async function getServerSideProps({ params }) {
  const [gameRes, screenshotsRes] = await Promise.all([
    fetch(RAWG_GAME_SLUG(params.slug)),
    fetch(RAWG_GAME_SLUG_SCREENSHOTS(params.slug)),
  ])

  const [game, screenshots] = await Promise.all([
    gameRes.json(),
    screenshotsRes.json(),
  ])

  return { props: { game, screenshots } }
}

export default function GamePage(props) {
  const {
    name,
    description_raw: description,
    background_image: mainCover,
    platforms,
  } = props?.game

  const requirement = props.game.platforms.filter(item => {
    return item.platform.name === 'PC'
  })[0]?.requirements

  if (!props.game.name) {
    return <Page404 />
  }

  return (
    <Layout title={name}>
      <Container gap>
        <h1 className={css.title}>{name}</h1>
        <div className={css.platforms}>
          {platforms?.map(item => {
            return <span key={item.platform.id}>● {item.platform.name}</span>
          })}
        </div>
        {mainCover && (
          <div className={css.image}>
            <Image src={mainCover} alt={name} layout="fill" objectFit="cover" />
          </div>
        )}
        <p className={css.desc}>{description}</p>
      </Container>
      {requirement && <Requirements requirement={requirement} />}
      {props.screenshots && (
        <Container gap sx={css.screenshots}>
          <h2 className={css.heading}>{name}&apos;s Screenshots</h2>
          <Screenshots screenshots={props.screenshots.results} />
        </Container>
      )}
    </Layout>
  )
}
