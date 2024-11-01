import * as React from 'react'
import { Waypoint } from 'react-waypoint'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faTwitterSquare,
  faFacebookSquare
} from '@fortawesome/free-brands-svg-icons'

const ContactSection = () => {
    return(
        <div id="contact" className="contact-container">
            <Waypoint>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2 className="highlight-heading"><span id="highlightContact"></span>Contact Us</h2>
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
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </div>
                        <div className="col-lg-4 text-end">
                            <a className="btn-alt" href="">Got Feedback?</a>
                        </div>
                    </div>
                </div>
            </Waypoint>
        </div>
    )
}

export default ContactSection