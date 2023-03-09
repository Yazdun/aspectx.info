import { Anger, Ice } from 'assets'
import { Layout } from 'components'
import { Hero, Partition, Platforms, RAWG, Trending } from 'landingPage'

export default function Home() {
  return (
    <Layout title="AspectX" desc="Explore video games like never before">
      <Hero />
      <Platforms />
      <Partition
        title="You Must Play These Titles"
        info="No matter how much time has been passed, some videogame titles are
          just timeless and every videogames lover must get involved with them.
          So make sure that you won't miss our must play section."
        url="/mustplay"
      />
      <Partition
        title="Who create these games ?!"
        info="Have you ever wondered who creates all these awesome video games ? 
        If the answer is yes, then you can read about industry's 
        most talented developers in our special developer section."
        url="/developers"
        image={Anger}
        rtl
      />
      <Partition
        title="Recent released games"
        info="Do you want to miss hot new video games ? If not, then make sure to checkout latest released video games on the market in this section"
        url="/trending"
        image={Ice}
      />
      <RAWG />
    </Layout>
  )
}
