import { Layout } from 'components'
import { Hero, MustPlay, Trending } from 'landingPage'

export default function Home() {
  return (
    <Layout title="AspectX">
      <Hero />
      <Trending />
      {/* <MustPlay /> */}
    </Layout>
  )
}
