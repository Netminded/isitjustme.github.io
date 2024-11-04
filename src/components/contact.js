import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faInstagramSquare,
  faTwitterSquare,
  faFacebookSquare
} from '@fortawesome/free-brands-svg-icons'

const ContactSection = () => {
    return(
        <div id="contact" className="container contact-container">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h2 className="highlight-heading">Contact Us</h2>
                    </div>
                </div>
                <div className="row contact-info-main">
                    <div className="col-lg-4">
                        <a href="mailto:hello@isitjustme.online"><h5>hello[@]isitjustme.online</h5></a>
                    </div>
                    <div className="col-lg-4 text-center social-footer">
                        <a href="" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faFacebookSquare} />
                        </a>
                        <a href="" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faTwitterSquare} />
                        </a>
                        <a href="" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faInstagramSquare} />
                        </a>
                    </div>
                    <div className="col-lg-4 text-end">
                        <a className="btn-alt" href="">Got Feedback?</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactSection