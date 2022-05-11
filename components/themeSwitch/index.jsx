import css from './styles.module.css'
import { FiSun } from 'react-icons/fi'
import cn from 'classnames'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  const isDark =
    theme === 'dark' ||
    (theme === 'system' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

  useEffect(() => setMounted(true), [])

  if (!mounted) return null
  return (
    <button className={css.cta} onClick={toggleTheme}>
      <FiSun />
    </button>
  )
}
