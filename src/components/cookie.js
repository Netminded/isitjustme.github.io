import * as React from 'react'
import CookieConsent from 'react-cookie-consent'
import { Link } from 'gatsby'
import { initializeAndTrack } from 'gatsby-plugin-gdpr-cookies'
import { useLocation } from '@reach/router'

const CookieBanner = () => {
    const location = useLocation()
    return (
        <CookieConsent
            disableButtonStyles={true}
            buttonClasses='cookie-button'
            declineButtonClasses='cookie-button cookie-button-right'
            containerClasses='cookie-banner'
            location="bottom"
            buttonText="Accept"
            enableDeclineButton
            declineButtonText="Decline"
            cookieName="gatsby-gdpr-google-analytics"
            expires={90}
            onAccept={() => initializeAndTrack(location)}
            >
            Is It Just Me? uses essential cookies and optional Google Analytics cookies. To allow optional analytics cookies select 'Accept'. {" "}
            <Link style={{color: "#0d6af6"}} to="/cookies"> View Cookie Policy</Link>
        </CookieConsent>
    )
}

export default CookieBanner