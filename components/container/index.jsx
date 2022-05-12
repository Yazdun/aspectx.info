import css from './styles.module.css'
import cn from 'classnames'

export const Container = ({
  children,
  paddingBlock = '1rem',
  paddingInline = '1rem',
  margin = 'auto',
  sx,
}) => {
  return (
    <div
      className={cn(css.container, sx)}
      style={{ paddingBlock, paddingInline, margin }}
    >
      {children}
    </div>
  )
}
