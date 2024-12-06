import * as React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faInstagramSquare,
  faSquareXTwitter
} from '@fortawesome/free-brands-svg-icons'

const ContactSection = () => {
    const { site } = useStaticQuery(query)
    const socials = site.siteMetadata.socials
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
                        {/* <a href="" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faFacebookSquare} />
                        </a> */}
                        <a href={socials[1].url} target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faInstagramSquare} />
                        </a>
                        <a href={socials[2].url} target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faSquareXTwitter} />
                        </a>
                    </div>
                    <div className="col-lg-4 text-end">
                        <a className="btn-alt" href="https://forms.clickup.com/20532630/f/kjkcp-4832/8T1Z0BH54ZTVKJMPIB" rel="noreferrer">Got Feedback?</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactSection

const query = graphql`
query Social {
    site {
      siteMetadata {
        socials { url }
      }
    }
  }
`