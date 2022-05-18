import { Container, LinkButton } from 'components'
import css from './styles.module.css'

export const RAWG = () => {
  return (
    <Container gap sx={css.container}>
      <div className={css.rawg}>
        <h2 className={css.title}>
          Thanks to <span className={css.logo}>RAWG</span> API
        </h2>
        <p>
          This website was built thanks to RAWG API. RAWG is the largest video
          game database and game discovery service. And they are sharing their
          500,000+ games, search, and machine learning recommendations with the
          world. Learn what the RAWG games database API can do and build
          something cool with it!
        </p>
        <LinkButton margin="2rem 0 0 0" href="https://rawg.io/apidocs" blank>
          Read the documentation
        </LinkButton>
      </div>
    </Container>
  )
}
