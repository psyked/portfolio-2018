import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/Footer'

import '../assets/scss/main.scss'

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div>
        <Helmet
          htmlAttributes={{
            lang: 'en',
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    )
  }
}

Template.propTypes = {
  children: PropTypes.func,
}

export default Template
