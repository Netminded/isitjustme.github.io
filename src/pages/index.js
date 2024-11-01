import * as React from "react"
import Layout from "../components/layout"
import { useState } from 'react'
import { Waypoint } from 'react-waypoint'
import { StaticImage } from 'gatsby-plugin-image'
import HeroBg from "../images/IsItJustMe"

import CtaSection from "../components/cta"
import ContactSection from "../components/contact"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faUsersRectangle,
    fa1,
    fa2,
    fa3
  } from '@fortawesome/free-solid-svg-icons'


const scrollTo = (e, sectionName) => {
    const section = document.getElementById(`${sectionName}`)
    e.preventDefault()
    section && section.scrollIntoView({ behavior: "smooth", block: "start" })
}


const IndexPage = () => {
  const [isHero, setIsHero] = useState(false)
  return (
    <Layout isArticle={false} isHero={isHero} scrollTo={scrollTo}>
        <Waypoint onEnter={() => setIsHero(true)} onLeave={() => setIsHero(false)}>
            <div className="hero-container">
                <div className="hero-container-sub">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 order-lg-2">
                                <div className="hero-image">
                                    <div className="hero-image-container">
                                        <HeroBg />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 order-lg-1">
                                <div className="hero-content">
                                    <h1>Is the Internet Down?<br/>Find Out Together!</h1>
                                    <h3>Create or join a community to monitor your Wi-Fi health instantly. Get the free Chrome extension for home and work.</h3>
                                    <div className="hero-cta">
                                        <div className="btn-container">
                                            <a className="btn" href="javascript:void(0)" onClick={(e) => scrollTo(e, "about")}>Learn More</a>
                                        </div>
                                        <div className="btn-container">
                                            <a className="btn hero-btn-last" href="" target="_blank" rel="noreferrer">Add to Chrome</a> 
                                        </div>
                                        <div className="arrow">
                                            <StaticImage src="../images/Arrow.svg" alt="" />
                                            <span>It's free!</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Waypoint>
        <div id="about" className="about-container">
            <Waypoint>
                <div className="about-info">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h2 className="highlight-heading"><span id="highlight"></span>Why You'll Love It</h2>
                                <p className="text-accent">With the "Is It Just Me?" Chrome extension pinned to your toolbar, the icon changes color to reflect your Wi-Fi status—Green means everything’s working fine, Amber indicates some issues, and Red signals a major outage. 
                                    This makes it easy to tell if the problem is with your Wi-Fi or the Internet. The extension monitors your connection instantly after installation, with no setup needed.</p>
                                <hr className="divider-small"></hr>
                                <p>By joining a group of family, friends, or coworkers, you can easily see if others are experiencing the same connectivity issues. If you're online, you'll be able to see if others are offline and any delays or issues will be clearly visible when you are connected.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Waypoint>
            <div className="about-profiles">
                <div className="container">
                    <Waypoint>
                        <div className="row mb-5">
                            <div className="col-md-4">
                                <div className="profile-first">
                                    <StaticImage src="../images/InstantAlerts.svg" alt="" />
                                </div>
                            </div>
                            <div className="col-md-8 profile-text">
                                <div className="profile-text-container ms-5">
                                    <h5>Instant Alerts</h5>
                                    <p>Get visual feedback when your Wi-Fi or Internet connection drops or weakens.</p>
                                </div>
                            </div>
                        </div>
                    </Waypoint>
                    <Waypoint>
                        <div className="row">
                            <div className="col-md-4 order-md-2">
                                <div className="profile-middle">
                                    <StaticImage src="../images/CommunitySharing.svg" alt="" />
                                </div>
                            </div>
                            <div className="col-md-8 order-md-1 profile-text">
                                <div className="profile-text-container me-5">
                                    <h5>Community Sharing</h5>
                                    <p>Easily connect with others in your group to check if they're facing the same connectivity issues. While online, you'll be able to see if others in your group go offline (if you're offline, you can't see their status).</p>
                                </div>
                            </div>
                        </div>
                    </Waypoint>
                    <Waypoint>
                        <div className="row mt-5">
                            <div className="col-md-4">
                                <div className="profile-last">
                                    <StaticImage src="../images/PrivacySecurity.svg" alt="" />
                                </div>
                            </div>
                            <div className="col-md-8 profile-text">
                                <div className="profile-text-container ms-5">
                                    <h5>Privacy First</h5>
                                    <p>We don’t store any of your personal data beyond your public IP address. We don’t store any other personal information. Your group is anonymous subject to your choice of group name, and your connection is secure.</p>
                                </div>
                            </div>
                        </div>
                    </Waypoint>
                </div>
            </div>
        </div>
        <div id="services" className="services-container">
            <Waypoint>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2 className="highlight-heading"><span id="highlightServices"></span>How It Works</h2>
                        </div>
                    </div>
                    <div className="row">
                        <Waypoint>
                            <div className="col-lg-4">
                                <div className="services-panel">
                                    <span className="panel-header">
                                        <FontAwesomeIcon icon={fa1} /> .
                                    </span>
                                    <h6>Install the Extension</h6>
                                    <p>Add "Is It Just Me?" to your Chrome browser with one click and then pin it to your toolbar.</p>
                                </div>
                            </div>
                        </Waypoint>
                        <Waypoint>
                            <div className="col-lg-4">
                                <div className="services-panel">
                                    <span className="panel-header">
                                        <FontAwesomeIcon icon={fa2} /> .
                                    </span>
                                    <h6>Monitor Your Internet Health</h6>
                                    <p>The browser icon will alert you with color changes when your connection weakens or fails.</p>
                                </div>
                            </div>
                        </Waypoint>
                        <Waypoint>
                            <div className="col-lg-4">
                                <div className="services-panel">
                                    <span className="panel-header">
                                        <FontAwesomeIcon icon={fa3} /> .
                                    </span>
                                    <h6>Create or Join a Group</h6>
                                    <p>Set up a community with friends, family, or colleagues to share your Internet status and see if others are experiencing the same issues.</p>
                                </div>
                            </div>
                        </Waypoint>
                    </div>
                </div>
            </Waypoint>
        </div>
        <div id="whoIsThisFor">
            <Waypoint>
                <div className="about-info">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h2 className="highlight-heading"><span id="highlight"></span>Who Is This For?</h2>
                                <p className="text-accent">Home Users: Stop wondering if your Wi-Fi is down or if it's just you—ask the group!</p>
                                <p>Remote Workers: Stay connected with your team and check for outages before troubleshooting your setup.</p>
                                <p>Small Offices: Collaborate with coworkers and keep an eye on your office Wi-Fi without needing to call IT right away.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Waypoint>
        </div>
        <CtaSection />
        <ContactSection />
    </Layout>
  )
}

export default IndexPage
