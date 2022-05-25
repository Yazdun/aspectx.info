import css from './index.module.css'
import { Container, Layout } from 'components'
import Image from 'next/image'
import { RAWG_CREATORS } from 'services'
import { IoIosImages } from 'react-icons/io'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useState } from 'react'
import Link from 'next/link'

export async function getStaticProps() {
  const res = await fetch(RAWG_CREATORS)
  const data = await res.json()
  return { props: { data } }
}

export default function Developers(props) {
  const [devs, setDevs] = useState(props.data.results || [])
  const [next, setNext] = useState(props.data.next)

  const getMoreDevs = async () => {
    const res = await fetch(next)
    const data = await res.json()
    setDevs(prev => [...prev, ...data.results])
    setNext(data.next)
  }

  return (
    <Layout
      title="AspectX | Developers"
      url="developers"
      desc="Checkout game industry's best developers"
    >
      <Container gap paddingInline="0">
        <h1 className={css.header}>Industry&apos;s Top Developers</h1>
        <InfiniteScroll
          dataLength={devs.length}
          next={getMoreDevs}
          hasMore={true}
          loader={<h3 className={css.InfiniteScroll}> Loading...</h3>}
          endMessage={
            <h4 className={css.InfiniteScroll}>Nothing more to show</h4>
          }
          className={css.container}
        >
          {devs.map(dev => {
            return (
              <Link href={`/developers/${dev.id}`} key={dev.id}>
                <a className={css.card}>
                  <div className={css.image}>
                    {dev.image ? (
                      <Image
                        src={dev.image}
                        alt={dev.name}
                        layout="fill"
                        objectFit="cover"
                      />
                    ) : (
                      <IoIosImages className={css.noimage} />
                    )}
                  </div>
                  <div className={css.title}>
                    <h2 className={css.name}>{dev.name}</h2>
                    <p>{dev.positions[0].name}</p>
                  </div>
                </a>
              </Link>
            )
          })}
        </InfiniteScroll>
      </Container>
    </Layout>
  )
}
