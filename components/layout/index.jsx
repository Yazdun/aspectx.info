import { Footer, Navigation } from 'components'
import { NextSeo } from 'next-seo'
import css from './styles.module.css'

export const Layout = ({ children, title, desc, image, url }) => {
  return (
    <>
      <NextSeo
        title={title}
        description={desc}
        additionalLinkTags={[{ rel: 'icon', href: '/favicon.png' }]}
        openGraph={{
          url: `https://aspectx.com/${url}`,
          title: title,
          description: desc,
          locale: 'en_us',
          images: [
            {
              url: image,
              width: 1200,
              height: 630,
              alt: title,
              type: 'image/jpeg',
            },
          ],
          site_name: 'AspectX',
        }}
        twitter={{
          handle: '@AspectX',
          site: '@AspectX',
          cardType: 'summary_large_image',
        }}
      />
      <Navigation />
      <main id="main" className={css.main}>
        {children}
      </main>
      <Footer />
    </>
  )
}
