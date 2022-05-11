import { Header } from 'components/ui/Header'
import React from 'react'
import styles from './styles.module.scss'

type BaseLayout = {
  children?: React.ReactNode | React.ReactNode[]
}

function BaseLayout({ children }: BaseLayout) {
  return (
    <>
      <Header />
      <main className={styles.container}>{children}</main>
    </>
  )
}

export { BaseLayout }
