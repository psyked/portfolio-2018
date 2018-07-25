import React from 'react'
import Helmet from 'react-helmet'
import { Link, withPrefix } from 'gatsby-link'

import Header from '../components/Header'
import Footer from '../components/Footer'

import '../assets/scss/main.scss'

class Template extends React.Component {

    render() {
        const { children } = this.props

        return (
            <div>
                <Helmet>
                </Helmet>
                <Header />
                <main>
                    {children()}
                </main>
                <Footer />
            </div>
        )
    }
}

Template.propTypes = {
    children: React.PropTypes.func
}

export default Template
