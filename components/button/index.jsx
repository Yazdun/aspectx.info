import css from './styles.module.css'
import cn from 'classnames'

export const Button = ({ children, onClick, sx, margin = '0 0' }) => {
  return (
    <button style={{ margin }} className={cn(css.btn, sx)} onClick={onClick}>
      {children}
    </button>
  )
}
