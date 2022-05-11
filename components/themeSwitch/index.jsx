import css from './styles.module.css'
import { FiSun } from 'react-icons/fi'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { RiMoonCloudyLine } from 'react-icons/ri'
import { AnimatePresence, motion } from 'framer-motion'

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
      <AnimatePresence exitBeforeEnter>
        {isDark ? <LightBtn key="light" /> : <DarkBtn key="dark" />}
      </AnimatePresence>
    </button>
  )
}

const LightBtn = () => {
  return (
    <motion.div
      initial={{
        y: -40,
      }}
      animate={{
        y: 0,
      }}
      exit={{
        y: 40,
      }}
      transition={{ duration: 0.4 }}
      className={css.icon}
    >
      <RiMoonCloudyLine />
    </motion.div>
  )
}

const DarkBtn = () => {
  return (
    <motion.div
      initial={{
        y: -40,
      }}
      animate={{
        y: 0,
      }}
      exit={{
        y: 40,
      }}
      transition={{ duration: 0.4 }}
      className={css.icon}
    >
      <FiSun />
    </motion.div>
  )
}
