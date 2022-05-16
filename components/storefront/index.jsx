import React from 'react'
import css from './styles.module.css'

export const Storefront = ({ store }) => {
  const { domain, name, slug, icon, games } = store
  return (
    <div className={css.card}>
      <div className={css.icon}>{icon}</div>
      <h2>{name}</h2>
    </div>
  )
}
