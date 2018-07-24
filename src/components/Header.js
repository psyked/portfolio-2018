import React from 'react'
import Link from 'gatsby-link'

import styles from './header.module.scss'

const Header = (props) => (
    <header className={styles.root}>
        <nav>
            <Link to="/" className={styles.menuLink} activeClassName={styles.active} exact>Home</Link>
            <Link to="/blog/" className={styles.menuLink} activeClassName={styles.active}>Archive</Link>
        </nav>
    </header>
)

export default Header
