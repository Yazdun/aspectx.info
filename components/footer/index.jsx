import css from './styles.module.css'

export const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className={css.footer}>
      <p>{year} © all rights reserved</p>
    </footer>
  )
}
