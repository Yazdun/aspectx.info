import { Button, Container } from 'components'
import css from './styles.module.css'
import cn from 'classnames'
import { useTheme } from 'next-themes'

export const Trending = () => {
  const { theme } = useTheme()
  const isDark =
    theme === 'dark' ||
    (theme === 'system' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)

  return (
    <div className={cn(css.trending, isDark ? css.dark : css.light)}>
      <Container>
        <h2 className={css.title}>checkout hot trending games</h2>
        <p className={cn(css.info, css.trendingInfo)}>
          There are thousands of awesome video games getting released on daily
          basis, You can easily find the most anticipated upcoming video games
          in our trending section, All trending games are carefully analyzed by
          our smart search engine, based on our community
        </p>
        <Button margin="1.5rem 0" active>
          Checkout trendings
        </Button>
      </Container>
    </div>
  )
}
