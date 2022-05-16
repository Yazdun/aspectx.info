import { Menu, Search, ThemeSwitch } from 'components'
import Link from 'next/link'
import css from './styles.module.css'

export const Navigation = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <nav className={css.nav}>
          <div className={css.partition}>
            <Menu />
            <Link href="/">
              <a className={css.logo}>AspectX</a>
            </Link>
          </div>
          <div className={css.partition}>
            <Search />
            <ThemeSwitch />
          </div>
        </nav>
      </div>
    </div>
  )
}
