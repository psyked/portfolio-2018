import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import styles from './tiles.module.scss'

const Tiles = ({ tiles }) => {
    return (
        <aside className={`bodyContent ${styles.tileContainer}`}>
            {tiles &&
                tiles
                    .filter(tile => !!tile)
                    .map((tile, index) => {
                        return (
                            <section key={index} className={styles.tile}>
                                <Link to={tile.frontmatter.path}>
                                    {tile.frontmatter.image && tile.frontmatter.image.childImageSharp && (
                                        <aside className={styles.imageContainer}>
                                            <Img sizes={tile.frontmatter.image.childImageSharp.sizes} outerWrapperClassName={styles.wrapper} className={styles.wrapper} />
                                        </aside>
                                    )}
                                    <div className={styles.blackout}></div>
                                    <h3 className={styles.link}>{tile.frontmatter.title}</h3>
                                    <p>{tile.frontmatter.description}</p>
                                    <p>{tile.frontmatter.date}</p>
                                </Link>
                            </section>
                        )
                    })}
        </aside>
    )
}

export default Tiles