import { Layout } from 'components'
import { Hero, Platforms, Trending } from 'landingPage'

export default function Home() {
  return (
    <Layout title="AspectX">
      <Hero />
      <Trending />
      <Platforms />
    </Layout>
  )
}
