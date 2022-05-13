import { Container, Layout } from 'components'
import Image from 'next/image'
import css from './styles.module.css'

export default function Home() {
  return (
    <Layout title="AspectX">
      <Container sx={css.header}>
        <h1>Explore Video Games Like Never Before</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut eos
          repellendus iure aperiam? Vitae nam cupiditate necessitatibus omnis
          inventore. Aliquid, ipsum. Maxime, beatae eveniet autem incidunt
          rerum, eaque quasi optio recusandae est veniam neque.
        </p>

        {/* <div className={css.img}></div> */}
      </Container>
    </Layout>
  )
}
