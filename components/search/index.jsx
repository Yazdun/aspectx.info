import css from './styles.module.css'
import { FiSearch } from 'react-icons/fi'

export const Search = () => {
  return (
    <button className={css.cta}>
      <FiSearch />
    </button>
  )
}
