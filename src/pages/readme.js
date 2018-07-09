import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import ReactMarkdown from 'react-markdown'

import content from 'raw!./README.md'

const Generic = (props) => (
    <div>
        <Helmet>
            <title>Generic - Forty by HTML5 UP</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <header className="major">
            <h1>README</h1>
        </header>

        <ReactMarkdown source={content} />

    </div>
)

export default Generic