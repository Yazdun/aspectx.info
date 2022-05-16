import Link from 'next/link'
import css from './styles.module.css'
import cn from 'classnames'

export const GamePrev = ({ game, fullsize }) => {
  const { slug, name, background_image: image, rating } = game

  return (
    <Link href="/trending">
      <a className={cn(css.card, fullsize && css.fullcard)}>
        <img
          className={cn(css.image, fullsize && css.fullimage)}
          src={image}
          alt={name}
        />
        <span className={cn(css.title, fullsize && css.absolutetitle)}>
          {name}
        </span>
      </a>
    </Link>
  )
}
