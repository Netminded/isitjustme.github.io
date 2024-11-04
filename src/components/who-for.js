import * as React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faHouseUser,
    faHouseLaptop,
    faBuilding
  } from '@fortawesome/free-solid-svg-icons'

const WhoForSection = () => {
    return (
        <div id="whoIsThisFor">
            <div className="container whofor-container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h2 className="highlight-heading">Who Is This For?</h2>
                        <div className="row">
                            <div className="col-lg-4">
                                <FontAwesomeIcon icon={faHouseUser} />
                                <p className="text-accent">Home Users</p> 
                                <p>Stop wondering if your Wi-Fi is down or if it's just you—ask the group!</p>
                            </div>
                            <div className="col-lg-4">
                                <FontAwesomeIcon icon={faHouseLaptop} />
                                <p className="text-accent">Remote Workers</p> 
                                <p>Stay connected with your team and check for outages before troubleshooting your setup.</p>
                            </div>
                            <div className="col-lg-4">
                                <FontAwesomeIcon icon={faBuilding} />
                                <p className="text-accent">Small Offices</p> 
                                <p>Collaborate with coworkers and keep an eye on your office Wi-Fi without needing to call IT right away.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhoForSection