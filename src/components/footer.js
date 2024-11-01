import * as React from 'react'
import { Link } from 'gatsby'

const getYear = () => {
    const date = new Date();
    return date.getFullYear();
}

const Footer = () => {
    return(
        <footer>
            <p>Copyright © {getYear()} Is It Just Me? is a trading name of SeeThru Networks. All Rights Reserved.</p>
            <div className='footer-links'>
                <Link to="/privacy">Privacy Policy</Link>
                <Link to="/terms">Terms</Link>
                <Link to="/web-terms">Web Terms</Link>
            </div>
        </footer>
    )
}

export default Footer