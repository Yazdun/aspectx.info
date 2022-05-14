import css from './styles.module.css'
import cn from 'classnames'
import Link from 'next/link'

export const Button = ({ children, onClick, sx, margin = '0 0' }) => {
  return (
    <button
      style={{ margin }}
      className={cn(css.btn, css.ripple, sx)}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export const LinkButton = ({ children, onClick, sx, margin = '0 0', href }) => {
  return (
    <Link href={href}>
      <a
        style={{ margin }}
        className={cn(css.btn, css.link, sx)}
        onClick={onClick}
      >
        {children}
      </a>
    </Link>
  )
}
