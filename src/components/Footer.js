import React from 'react'
import styled from 'styled-components'

import {
    FaGithub,
    FaTwitter,
    FaInstagram,
    FaMedium,
    FaLinkedin,
} from 'react-icons/fa'

const Overlay = styled.aside`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  background: hsla(240, 100%, 12%, 0.6);
  z-index: 1;
`

const TwitterLink = styled.li`
  background: #00acee;

  a,
  a:link,
  a:active,
  a:hover,
  a:visited {
    color: #ffffff;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`

const GitHubLink = styled.li`
  background: #181818;

  a,
  a:link,
  a:active,
  a:hover,
  a:visited {
    color: #ffffff;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`

const LinkedInLink = styled.li`
  background: #0077b5;

  a,
  a:link,
  a:active,
  a:hover,
  a:visited {
    color: #ffffff;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`

const MediumLink = styled.li`
  background: #37b042;

  a,
  a:link,
  a:active,
  a:hover,
  a:visited {
    color: #ffffff;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`

const InstagramLink = styled.li`
  background: #d6249f;
  background: radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );

  a,
  a:link,
  a:active,
  a:hover,
  a:visited {
    color: #ffffff;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`

const Footer = (props) => (
    <footer id="footer" style={{
        backgroundColor: props.colour || 'hsla(240, 100%, 12%, 0.6)',
        position: 'relative',
        marginTop: '-1em',
        padding: '1em 0 3em'
    }}>
        <Overlay />
        <div className="bodyContainer" style={{ zIndex: 2, position: 'relative', color: 'white' }}>
            <div className="bodyContent">
                <h3>Elsewhere, on social media;</h3>
                <ul className="external-profiles">
                    <TwitterLink>
                        <a href="//twitter.com/psyked">
                            <span>
                                <FaTwitter />
                                Twitter
                        </span>
                        </a>
                    </TwitterLink>
                    <InstagramLink>
                        <a href="//instagram.com/psyked">
                            <span>
                                <FaInstagram />
                                Instagram
                        </span>
                        </a>
                    </InstagramLink>
                    <GitHubLink>
                        <a href="//github.com/psyked">
                            <span>
                                <FaGithub />
                                GitHub
                        </span>
                        </a>
                    </GitHubLink>
                    <LinkedInLink>
                        <a href="//linkedin.com/in/jamesford">
                            <span>
                                <FaLinkedin />
                                LinkedIn
                        </span>
                        </a>
                    </LinkedInLink>
                    <MediumLink>
                        <a href="//medium.com/@psyked">
                            <span>
                                <FaMedium />
                                Medium
                        </span>
                        </a>
                    </MediumLink>
                </ul>
            </div>
        </div>
    </footer>
)

export default Footer
