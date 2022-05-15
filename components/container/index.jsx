import css from './styles.module.css'
import cn from 'classnames'
import { motion } from 'framer-motion'

export const Container = ({
  children,
  paddingBlock = '1rem',
  paddingInline = '1rem',
  margin = 'auto',
  gap,
  sx,
  initial,
  whileInView,
  duration,
  delay,
}) => {
  return (
    <motion.div
      className={cn(css.container, sx)}
      style={{
        paddingBlock,
        paddingInline,
        margin: gap ? '5rem auto' : margin,
      }}
      initial={initial}
      whileInView={whileInView}
      viewport={{ once: true }}
      transition={{
        duration: duration ? duration : 0.3,
        delay: delay ? delay : 0,
      }}
    >
      {children}
    </motion.div>
  )
}
