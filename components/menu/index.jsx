import { Twirl as Hamburger } from 'hamburger-react'
import css from './styles.module.css'
import { useState } from 'react'

export const Menu = () => {
  const [isOpen, setOpen] = useState(false)

  return <Hamburger toggled={isOpen} toggle={setOpen} />
}
