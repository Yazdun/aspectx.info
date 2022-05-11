import css from './styles.module.css'
import { FiSun } from 'react-icons/fi'

export const ThemeSwitch = () => {
  return (
    <button className={css.cta}>
      <FiSun />
    </button>
  )
}
