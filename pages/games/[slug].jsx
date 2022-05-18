import { Container, Layout } from 'components'
import React from 'react'
import game from 'mocks/game.json'
import css from './styles.module.css'
import Image from 'next/image'
import { RAWG_GAME_SLUG } from 'services'

export async function getServerSideProps({ params }) {
  const res = await fetch(RAWG_GAME_SLUG(params.slug))

  const data = await res.json()

  return { props: { data } }
}

export default function GamePage(props) {
  const {
    name,
    description_raw: description,
    background_image: mainCover,
    platforms,
  } = props.data

  return (
    <Layout title="God of war">
      <Container gap>
        <h1 className={css.title}>{name}</h1>
        <div className={css.platforms}>
          {platforms.map(item => {
            return <span key={item.platform.id}>● {item.platform.name}</span>
          })}
        </div>
        <div className={css.image}>
          <Image src={mainCover} alt={name} layout="fill" objectFit="cover" />
        </div>
        <p className={css.desc}>{description}</p>
      </Container>
    </Layout>
  )
}
