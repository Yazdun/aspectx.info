import { Container, Layout } from 'components'
import dev from 'mocks/dev.json'
import Image from 'next/image'
import css from './styles.module.css'
import { IoIosImages } from 'react-icons/io'
import { RAWG_FIND_CREATOR } from 'services'

export async function getServerSideProps({ params }) {
  const res = await fetch(RAWG_FIND_CREATOR(params.id))
  const data = await res.json()

  return { props: { data } }
}

export default function Dev(props) {
  const { name, image, description, rating, games_count } = props.data
  console.log(props)

  function createMarkup() {
    return { __html: description }
  }

  return (
    <Layout title={dev.name}>
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
    </Layout>
  )
}
