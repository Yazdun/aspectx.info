import { Container } from 'components'
import css from './styles.module.css'
import cn from 'classnames'
import { BsFillMouse3Fill } from 'react-icons/bs'

export const Requirements = ({ requirement }) => {
  return (
    <Container gap sx={css.container}>
      <div className={css.icon}>
        <BsFillMouse3Fill />
      </div>
      <div className={css.info}>
        <p className={css.text}>
          <h3 className={css.title}>Minimum :</h3>
          {requirement.minimum?.replace('Minimum:', '')}
          {!requirement.minimum && '\nMinimum system is not provided'}
        </p>
        <br />
        <p className={cn(css.text, css.border)}>
          <h3 className={css.title}>Recommended :</h3>
          {requirement.recommended?.replace('Recommended:', '')}
          {!requirement.recommended && '\nRecommended system is not provided'}
        </p>
      </div>
    </Container>
  )
}
