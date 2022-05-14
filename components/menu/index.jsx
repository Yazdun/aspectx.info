import { Container, Route } from 'components'
import { Squash as Hamburger } from 'hamburger-react'
import { useState, useRef } from 'react'
import { Routes } from 'utils'
import css from './styles.module.css'
import { AnimatePresence, motion } from 'framer-motion'
import { useOnClickOutside } from 'hooks'
import cn from 'classnames'

export const Menu = () => {
  const [isOpen, setOpen] = useState(false)
  const ref = useRef()

  useOnClickOutside(ref, () => setOpen(false))

  return (
    <div ref={ref}>
      <div className={css.cta}>
        <Hamburger
          hideOutline={false}
          size={26}
          toggled={isOpen}
          toggle={setOpen}
        />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              y: '-100%',
            }}
            animate={{
              y: 0,
            }}
            exit={{
              y: '-100%',
            }}
            transition={{ duration: 0.3 }}
            className={css.menu}
          >
            <Container sx={css.container}>
              <ul className={css.links}>
                {Routes.map(route => {
                  return (
                    <li
                      className={cn(css.item, route.large && css.large)}
                      key={route.key}
                    >
                      <Route route={route} />
                    </li>
                  )
                })}
              </ul>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
