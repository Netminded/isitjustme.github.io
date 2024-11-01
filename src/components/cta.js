import * as React from 'react'
import { Waypoint } from 'react-waypoint'

const CtaSection = () => {
    return(
        <Waypoint>
            <div id="platform" className="container platform-container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h2 className="highlight-heading"><span id="highlightCta"></span>Never Ask 'Is It Just Me?' Again</h2>
                        <p className="text-accent mb-4 pb-2">Add the "Is It Just Me?" extension to your Chrome browser now and never guess about your Internet connection again.</p>
                        <a className="btn btn-content" href="" target="_blank" rel="noreferrer">Install for Free</a>
                    </div>
                </div>
            </div>
        </Waypoint>
    )
}

export default CtaSection