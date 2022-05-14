import css from './styles.module.css'
import cn from 'classnames'

export const Container = ({
  children,
  paddingBlock = '1rem',
  paddingInline = '1rem',
  margin = 'auto',
  gap,
  sx,
}) => {
  return (
    <div
      className={cn(css.container, sx)}
      style={{
        paddingBlock,
        paddingInline,
        margin: gap ? '5rem auto' : margin,
      }}
    >
      {children}
    </div>
  )
}
