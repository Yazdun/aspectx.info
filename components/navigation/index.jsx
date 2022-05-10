import css from './styles.module.css'
import { GiSamusHelmet } from 'react-icons/gi'
import { Menu } from 'components/menu'

export const Navigation = () => {
  return (
    <nav className={css.nav}>
      <GiSamusHelmet className={css.icon} />
      <Menu />
    </nav>
  )
}
