import React from 'react'
import ProfileImage from '../assets/images/profile-image.jpg'

import styles from './Banner.module.scss'

const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
            <div className={styles.container}>
                <div className={styles.profileImageContainer}>
                    <img src={ProfileImage} className={styles.profileImage} width="120" height="120" />
                </div>
                <div className={styles.textContainer}>
                    <header className="major">
                        <h1>Hi, I&apos;m James.</h1>
                    </header>
                    <div className="content">
                        <p>
                            Finely-honed elevator pitch goes here.<br />
                            Something something awesome words something.
                        </p>
                    </div>
                    <div className="content">
                        <ul className="icons large">
                            <li><a href="//twitter.com/psyked" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
                            <li><a href="//instagram.com/psyked" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li>
                            <li><a href="//github.com/psyked" className="icon alt fa-github"><span className="label">GitHub</span></a></li>
                            <li><a href="//linkedin.com/in/jamesford" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li>
                            <li><a href="//medium.com/@psyked" className="icon alt fa-medium"><span className="label">Medium</span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default Banner
