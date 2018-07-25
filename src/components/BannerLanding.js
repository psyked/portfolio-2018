import React from 'react'
import { withPrefix } from 'gatsby-link'
import Img from 'gatsby-image'


const BannerLanding = ({ title, lead, image }) => (
    <header style={{
        background: 'grey',
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative'
    }}>
        <div style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: 'rgba(0,0,0,.6)'
        }}></div>
        <div style={{
            color: 'white',
            position: 'relative',
            padding: '6em 2em 2em'
        }}>
            {image && image.childImageSharp && <Img sizes={image.childImageSharp.sizes} />}

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

export default BannerLanding
