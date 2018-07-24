import React from 'react'
import Link from 'gatsby-link'

const Tiles = ({ tiles }) => {
    return (
        <aside style={{
            width: '100%',
            height: 'calc(33vw - 2em)',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'stretch'
        }}>
            {tiles &&
                tiles
                    .filter(tile => !!tile)
                    .map((tile, index) => {
                        return (
                            <section key={index} style={{
                                display: 'flex',
                                flex: '1',
                                padding: '2em',
                                alignItems: 'center',
                                backgroundImage: `url(${tile.frontmatter.image})`,
                                // position: 'relative',
                            }}>
                                {/* <div style={{
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                                background: 'rgba(0,0,0,.6)'
                            }}></div> */}
                                <Link to={tile.frontmatter.path}>
                                    {tile.frontmatter.title}
                                </Link>
                            </section>
                        )
                    })}
        </aside>
    )
}

export default Tiles