import { Navigation } from 'components'
import React from 'react'

export const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <main id="main">{children}</main>
    </>
  )
}
