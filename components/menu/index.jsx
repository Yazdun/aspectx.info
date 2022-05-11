import { Squash as Hamburger } from 'hamburger-react'
import { useState } from 'react'
import css from './styles.module.css'

export const Menu = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <>
      <div className={css.cta}>
        <Hamburger
          hideOutline={false}
          size={26}
          toggled={isOpen}
          toggle={setOpen}
        />
      </div>
    </>
  )
}
