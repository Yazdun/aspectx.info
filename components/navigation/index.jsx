import { Menu, Search, ThemeSwitch } from 'components'
import css from './styles.module.css'

export const Navigation = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <nav className={css.nav}>
          <div className={css.partition}>
            <Menu />
            <p className={css.logo}>AspectX</p>
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
