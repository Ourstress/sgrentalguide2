// @flow

import { Link } from 'gatsby'
import React from 'react'

import styles from './header.module.scss'

const Header = ({ siteTitle }: { siteTitle: string }) => (
  <div className={styles.header}>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
        <Link to="/About">About</Link>
      </h1>
    </div>
  </div>
)

export default Header
