import React from 'react'

const BannerLanding = ({ title, lead, image }) => (
    <section id="banner" className="style2" style={{ background: 'grey', backgroundImage: `url(${image})` }}>
        <div className="inner">
            <header className="major">
                <h1>{title}</h1>
            </header>
            {lead &&
                <div className="content">
                    <p>{lead}</p>
                </div>
            }
        </div>
    </section>
)

export default BannerLanding
