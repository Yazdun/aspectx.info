import { Button, Container } from 'components'
import css from './styles.module.css'

export const Hero = () => {
  return (
    <Container gap sx={css.header}>
      <h1 className={css.title}>Explore Video Games Like Never Before</h1>
      <p className={css.info}>
        Are you looking for hot trending new games to play ? You can start
        exploring and discovering over 500,000 game titles including all sort of
        platforms, Right now !
      </p>
      <Button margin="1.5rem auto" active>
        Start exploring
      </Button>
    </Container>
  )
}
