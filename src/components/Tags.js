import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

const PostTags = ({ tags }) => {
    if (!tags) return <aside />
    return (
        <aside>
            Tagged as:
              {tags.map(tag => {
                const slug = tag
                    .replace(/\W/gi, '-')
                    .toLowerCase()
                return (
                    <span key={tag}>
                        <Link to={`/tag/${slug}`}>{tag}</Link>
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