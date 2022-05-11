import React from 'react'
import styles from './styles.module.scss'

function Header() {
  return (
    <header className={styles.container}>
      <h1 className={styles.title}>
        <img
          className={styles.logo}
          src="/logo.svg"
          alt="Weather Now"
          title="Weather Now"
        />
      </h1>
    </header>
  )
}

export { Header }
