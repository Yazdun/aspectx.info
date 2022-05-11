import { Squash as Hamburger } from 'hamburger-react'
import { useTheme } from 'next-themes'
import { useState } from 'react'
import css from './styles.module.css'

export const Menu = () => {
  const [isOpen, setOpen] = useState(false)
  const { theme } = useTheme()

  const isDark =
    theme === 'dark' ||
    (theme === 'system' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)

  return (
    <>
      <div className={css.cta}>
        <Hamburger
          hideOutline={false}
          size={26}
          toggled={isOpen}
          toggle={setOpen}
          color={isDark ? 'white' : 'black'}
        />
      </div>
    </>
  )
}
