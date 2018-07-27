import React from 'react'
import PropTypes from 'prop-types'

import styles from './sourcepost.module.scss'

const SourcePost = ({ url }) => {
    if (!url) return <aside />
    return (
        <aside className={styles.root}>
            This article was originally published at <a href={url}>{url}</a>
        </aside>
    )
}

SourcePost.propTypes = {

}

export default SourcePost