import React from 'react'
import ProfileImage from '../assets/images/profile-image.jpg'
import Link from 'gatsby-link';

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
                        <h2>
                            Technical Lead at comparethemarket.com
                        </h2>
                        <p>
                            I make things using <Link to={'/tag/javascript'}>Javascript</Link> and <Link to={'/tag/html'}>HTML5.</Link><br />
                            I particularly care about &ldquo;delightful details&rdquo; and working with visuals.
                        </p>
                    </div>
                    <div className="content">
                        <ul className="icons large">
                            <li className={styles.socialMedia}>
                                <a href="//twitter.com/psyked" className="icon alt fa-twitter"><span className={`label ${styles.socialMediaLabel}`}>Twitter</span></a></li>
                            <li className={styles.socialMedia}>
                                <a href="//instagram.com/psyked" className="icon alt fa-instagram"><span className={`label ${styles.socialMediaLabel}`}>Instagram</span></a></li>
                            <li className={styles.socialMedia}>
                                <a href="//github.com/psyked" className="icon alt fa-github"><span className={`label ${styles.socialMediaLabel}`}>GitHub</span></a></li>
                            <li className={styles.socialMedia}>
                                <a href="//linkedin.com/in/jamesford" className="icon alt fa-linkedin"><span className={`label ${styles.socialMediaLabel}`}>LinkedIn</span></a></li>
                            <li className={styles.socialMedia}>
                                <a href="//medium.com/@psyked" className="icon alt fa-medium"><span className={`label ${styles.socialMediaLabel}`}>Medium</span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section >
)

export default Banner
