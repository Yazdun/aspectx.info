import { Lightning } from 'assets'
import { Container, LinkButton } from 'components'
import Image from 'next/image'
import css from './styles.module.css'
import cn from 'classnames'

export const Partition = ({ image = Lightning, rtl, title, info, url }) => {
  return (
    <Container gap sx={cn(css.container, rtl && css.rtl)}>
      <div className={css.image}>
        <Image src={image} alt="" />
      </div>
      <div className={css.text}>
        <h2 className={css.title}>{title}</h2>
        <p className={css.info}>{info}</p>
        <LinkButton margin="0.6rem auto" href={url}>
          Find out more
        </LinkButton>
      </div>
    </Container>
  )
}
