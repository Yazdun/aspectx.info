import { Layout } from 'components'
import { Hero, Trending } from 'landingPage'

export default function Home() {
  return (
    <Layout title="AspectX">
      <Hero />
      <Trending />
    </Layout>
  )
}
