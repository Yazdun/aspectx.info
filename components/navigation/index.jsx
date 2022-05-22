import { Logo } from 'assets'
import { Menu, Search, ThemeSwitch } from 'components'
import Image from 'next/image'
import Link from 'next/link'
import { Routes } from 'utils'
import css from './styles.module.css'

export const Navigation = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <nav className={css.nav}>
          <div className={css.partition}>
            <Menu />
            <Link href="/">
              <a className={css.logo}>
                <Image src={Logo} alt="AspectX" placeholder="blur" />
              </a>
            </Link>
            <DesktopRoutes />
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

const DesktopRoutes = () => {
  return (
    <ul className={css.desktopRoutes}>
      {Routes.map(route => {
        return (
          <li key={route.key}>
            <Link href={route.url}>
              <a>{route.title}</a>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
