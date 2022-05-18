import { Container, Layout } from 'components'
import { RiGhostLine } from 'react-icons/ri'
import css from './styles.module.css'

export default function Page404() {
  return (
    <Layout title="AspectX | 404">
      <Container gap sx={css.err}>
        <RiGhostLine className={css.icon} />
        <div className={css.info}>
          <h1>404 - Not found</h1>
          <p>This page doesn&apos;t exist or has been deleted</p>
        </div>
      </Container>
    </Layout>
  )
}
