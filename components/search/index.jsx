import css from './styles.module.css'
import { FiSearch } from 'react-icons/fi'
import { useState, useRef } from 'react'
import { Container } from 'components'
import { useOnClickOutside } from 'hooks'
import { AnimatePresence, motion } from 'framer-motion'

export const Search = () => {
  const [open, setOpen] = useState(false)
  const ref = useRef()

  useOnClickOutside(ref, () => setOpen(false))

  return (
    <div className={css.wrapper} ref={ref}>
      <button className={css.cta} onClick={() => setOpen(prev => !prev)}>
        <FiSearch />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            className={css.search}
            initial={{
              y: '-100%',
            }}
            animate={{
              y: 0,
            }}
            exit={{
              y: '-100%',
            }}
            transition={{ duration: 0.4 }}
          >
            <Container>
              <input
                type="text"
                placeholder="Start typing ..."
                className={css.input}
              />
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
