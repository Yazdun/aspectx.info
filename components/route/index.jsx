import Link from 'next/link'
import css from './styles.module.css'

export const Route = ({ route }) => {
  const { title, url, icon } = route

  if (!route) return null

  return (
    <Link href={url}>
      <a className={css.route}>
        {title}
        {icon}
      </a>
    </Link>
  )
}
