import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import styles from './tags.module.scss'

const PostTags = ({ tags }) => {
    if (!tags) return <aside />
    return (
        <aside>
            <span className={styles.tagsLabel}>Tagged as:</span>
            {tags.map((tag, index) => {
                const slug = tag
                    .replace(/\W/gi, '-')
                    .toLowerCase()
                return (
                    <span key={tag} className={styles.tag}>
                        <Link to={`/tag/${slug}`}>{tag}</Link>
                        {(index !== tags.length - 1) &&
                            (
                                <span>, </span>
                            )
                        }
                    </span>
                )
            })}
        </aside>
    )
}

PostTags.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string)
}

export default PostTags