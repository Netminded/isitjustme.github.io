import * as React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCirclePlus,
    faHeartPulse,
    faUserGroup,
  } from '@fortawesome/free-solid-svg-icons'

const HowItWorksSection = () => {
    return (
        <div id="howItWorks" className="services-container">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h2 className="highlight-heading">How It Works</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="services-panel">
                            <span className="panel-header">
                                <FontAwesomeIcon icon={faCirclePlus} />
                            </span>
                            <h6>Install the Extension</h6>
                            <p>Add "Is It Just Me?" to your Chrome browser with one click and then pin it to your toolbar.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="services-panel">
                            <span className="panel-header">
                                <FontAwesomeIcon icon={faHeartPulse} />
                            </span>
                            <h6>Monitor Your Internet Health</h6>
                            <p>The browser icon will alert you with color changes when your connection weakens or fails.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="services-panel">
                            <span className="panel-header">
                                <FontAwesomeIcon icon={faUserGroup} />
                            </span>
                            <h6>Create or Join a Group</h6>
                            <p>Set up a community with friends, family, or colleagues to share your Internet status and see if others are experiencing the same issues.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowItWorksSection