import css from './index.module.css'
import { Container, Layout, Storefront } from 'components'
import { Storefronts } from 'utils'

export default function Stores() {
  return (
    <Layout title="AspectX | Stores">
      <Container gap>
        <h1 style={{ marginBottom: '5rem', textAlign: 'center' }}>
          Top Videogame&apos;s Storefronts
        </h1>
        <div className={css.grid}>
          {Storefronts.map(store => {
            return <Storefront key={store.id} store={store} />
          })}
        </div>
      </Container>
    </Layout>
  )
}
