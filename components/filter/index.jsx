import css from './styles.module.css'
import React, { useRef, useState } from 'react'
import { BiChevronDown } from 'react-icons/bi'
import { Genres } from 'utils'
import { useOnClickOutside } from 'hooks'
import { AnimatePresence, motion } from 'framer-motion'
import cn from 'classnames'

export const Filter = ({ fetchGenres }) => {
  const [genre, setGenre] = useState()
  const ref = useRef()
  const [isOpen, setIsOpen] = useState(false)

  useOnClickOutside(ref, () => setIsOpen(false))

  return (
    <div ref={ref} className={css.filter}>
      <button className={css.cta} onClick={() => setIsOpen(prev => !prev)}>
        {genre ? genre : 'Genre'}
        <BiChevronDown className={css.icon} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={css.genres}
            initial={{
              y: '-10%',
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: '-10%',
              opacity: 0,
            }}
            transition={{ duration: 0.2 }}
          >
            {Genres.map(g => {
              return (
                <button
                  className={cn(css.genre, genre === g.title && css.active)}
                  key={g.title}
                  onClick={() => {
                    setGenre(g.title)
                    setIsOpen(false)
                    fetchGenres(0, g.id)
                  }}
                >
                  {g.title}
                  {g.icon}
                </button>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
