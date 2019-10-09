import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from './Header'
import Footer from './Footer'

import '../assets/scss/main.scss'

class Template extends React.Component {
  render() {
    const { children, keyColour } = this.props;

    let colour;

    if (keyColour && keyColour.muted) {
      colour = keyColour.muted
    }

    return (
      <>
        <Helmet
          htmlAttributes={{
            lang: 'en',
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer colour={colour} />
      </>
    )
  }
}

Template.propTypes = {
  children: PropTypes.oneOf([PropTypes.node, PropTypes.func]),
}

export default Template
