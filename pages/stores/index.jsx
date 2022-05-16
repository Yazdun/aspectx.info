import css from './index.module.css'
import { Container, Layout, Storefront } from 'components'

export default function Stores() {
  return (
    <Layout title="AspectX | Stores">
      <Container sx={css.grid}>
        <h1>Storefronts</h1>
      </Container>
    </Layout>
  )
}
