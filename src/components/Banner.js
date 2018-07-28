import React from 'react'
import { withPrefix } from 'gatsby-link'
import Img from 'gatsby-image'
import { format } from 'date-fns'

import styles from './banner.module.scss'

const Banner = ({ title, date, description, image }) => (
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
            {description &&
                <div>
                    <h2>{description}</h2>
                </div>
            }
            <aside>
                Published: {format(new Date(date), 'DD MMM YYYY')}
            </aside>
        </div>
    </header>
)

export default Banner
