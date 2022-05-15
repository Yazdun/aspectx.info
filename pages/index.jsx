import { Layout } from 'components'
import { Hero, MustPlay, Platforms, Trending } from 'landingPage'

export default function Home() {
  return (
    <Layout title="AspectX">
      <Hero />
      <Trending />
      <Platforms />
      <MustPlay />
    </Layout>
  )
}
