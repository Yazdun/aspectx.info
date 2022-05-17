import Link from 'next/link'
import css from './styles.module.css'
import cn from 'classnames'
import Image from 'next/image'
import { FaEye } from 'react-icons/fa'

export const GamePrev = ({ game, fullsize }) => {
  const { slug, name, background_image: image, added } = game

  return (
    <Link href={`/games/${slug}`}>
      <a className={cn(css.card, fullsize && css.fullcard)}>
        <div className={cn(css.image, fullsize && css.fullimage)}>
          <Image src={image} alt={name} layout="fill" objectFit="cover" />
        </div>
        <span className={cn(css.title, fullsize && css.absolutetitle)}>
          {name}
          {fullsize && (
            <span className={css.added}>
              <FaEye />
              {added}
            </span>
          )}
        </span>
      </a>
    </Link>
  )
}
