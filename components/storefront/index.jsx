import Link from 'next/link'
import React from 'react'
import css from './styles.module.css'

export const Storefront = ({ store }) => {
  const { domain, name, icon } = store
  return (
    <Link href={`https://${domain}`}>
      <a className={css.card} target="_blank">
        <div className={css.icon}>{icon}</div>
        <h2 className={css.name}>{name}</h2>
      </a>
    </Link>
  )
}
