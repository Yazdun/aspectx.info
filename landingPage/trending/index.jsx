import { Button, Container, LinkButton } from 'components'
import css from './styles.module.css'
import cn from 'classnames'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export const Trending = () => {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const isDark =
    theme === 'dark' ||
    (theme === 'system' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className={cn(css.trending, isDark ? css.dark : css.light)}>
      <Container sx={css.container}>
        <h2 className={css.title}>checkout hot trending games</h2>
        <p className={cn(css.info, css.trendingInfo)}>
          There are thousands of awesome video games getting released on daily
          basis, You can easily find the most anticipated upcoming video games
          in our trending section, All trending games are carefully analyzed by
          our smart search engine, based on our community
        </p>
        <LinkButton href="/trending" margin="0.6rem 0" active>
          Checkout trendings
        </LinkButton>
      </Container>
    </div>
  )
}
