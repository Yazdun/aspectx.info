import { Container, ErrorPage, Layout } from 'components'
import React from 'react'
import css from './styles.module.css'
import Image from 'next/image'
import { RAWG_GAME_SLUG } from 'services'
import Page404 from 'pages/404'

export async function getServerSideProps({ params }) {
  const res = await fetch(RAWG_GAME_SLUG(params.slug))
  const errorCode = res.ok ? false : res.status

  if (errorCode) {
    params.statusCode = errorCode
  }

  const data = await res.json()

  return { props: { data, errorCode } }
}

export default function GamePage(props) {
  const {
    name,
    description_raw: description,
    background_image: mainCover,
    platforms,
  } = props.data

  if (props.errorCode) {
    return <Page404 />
  }

  return (
    <Layout title={name}>
      <Container margin="2rem auto">
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
