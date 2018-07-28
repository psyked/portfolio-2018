import React from 'react'
import { withPrefix } from 'gatsby-link'
import Img from 'gatsby-image'

import styles from './banner.module.scss'


const Banner = ({ title, lead, image }) => (
    <header className={styles.header}>
        {image && image.childImageSharp && (
            <aside className={styles.imageContainer}>
                <Img sizes={image.childImageSharp.sizes} outerWrapperClassName={styles.wrapper} className={styles.wrapper} />
            </aside>
        )}
        <div className={styles.container}></div>
        <div className="bodyContent" style={{
            color: 'white',
            position: 'relative'
        }}>
            <header>
                <h1>{title}</h1>
            </header>
            {lead &&
                <div>
                    <p>{lead}</p>
                </div>
            }
        </div>
    </header>
)

export default Banner
