import Link from 'next/link'
import css from './styles.module.css'

export const GamePrev = ({ game }) => {
  const { slug, name, background_image: image, rating } = game
  console.log(rating)

  return (
    <Link href="/trending">
      <a className={css.card}>
        <img className={css.image} src={image} alt={name} />
        <span className={css.title}>{name}</span>
      </a>
    </Link>
  )
}
