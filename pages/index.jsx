import { Anger, Ice } from 'assets'
import { Layout } from 'components'
import { Hero, Partition, Platforms, Trending } from 'landingPage'

export default function Home() {
  return (
    <Layout title="AspectX">
      <Hero />
      <Trending />
      <Platforms />
      <Partition
        title="You Must Play These Titles !"
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
        url="/mustplay"
        image={Anger}
        rtl
      />
      <Partition
        title="Best Videogame Storefronts !"
        info="You wanna buy a videogame ? Make sure to checkout our storefront section and we will introduce you to the most trusted gaming online stores on the internet"
        url="/mustplay"
        image={Ice}
      />
    </Layout>
  )
}
