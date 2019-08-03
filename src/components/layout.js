import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from './Header'
import Footer from './Footer'

import '../assets/scss/main.scss'

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <>
        <Helmet
          htmlAttributes={{
            lang: 'en',
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </>
    )
  }
}

Template.propTypes = {
  children: PropTypes.func,
}

export default Template
