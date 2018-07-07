import React from 'react'

const Footer = (props) => (
    <footer id="footer">
        <div className="inner">
            <ul className="icons large">
                <li><a href="//twitter.com/psyked" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                {/* <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li> */}
                <li><a href="//instagram.com/psyked" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
                <li><a href="//github.com/psyked" className="icon fa-github"><span className="label">GitHub</span></a></li>
                <li><a href="//linkedin.com/in/jamesford" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
                <li><a href="//medium.com/@psyked" className="icon fa-medium"><span className="label">Medium</span></a></li>
            </ul>
            {/* <ul className="copyright">
                <li>&copy; James Ford</li>
            </ul> */}
        </div>
    </footer>
)

export default Footer
