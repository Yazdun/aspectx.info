import { Lightning } from 'assets'
import { Container, LinkButton } from 'components'
import Image from 'next/image'
import css from './styles.module.css'

export const MustPlay = () => {
  return (
    <Container gap sx={css.container}>
      <div className={css.image}>
        <Image src={Lightning} alt="" />
      </div>
      <div className={css.text}>
        <h2 className={css.title}>You Must Play These Titles !</h2>
        <p className={css.info}>
          No matter how much time has been passed, some videogame titles are
          just timeless and every videogames lover must get involved with them.
          So make sure that you won&apos;t miss our must play section.
        </p>
        <LinkButton margin="0.6rem auto" href="/mustplay">
          Find out more
        </LinkButton>
      </div>
    </Container>
  )
}
