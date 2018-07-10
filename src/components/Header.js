import React from 'react'
import Link from 'gatsby-link'

const Header = (props) => (
    <header id="header" className="alt">
        <nav>
            <Link to="/" className="menu-link" activeClassName="active" exact>Home</Link>
            <Link to="/readme/" className="menu-link" activeClassName="active">README</Link>
            <Link to="/blog/" className="menu-link" activeClassName="active">Blog</Link>
        </nav>
    </header>
)

export default Header
