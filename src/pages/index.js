import * as React from "react"
import Layout from "../components/layout"
import { useState } from 'react'
import { Waypoint } from 'react-waypoint'
import { StaticImage } from 'gatsby-plugin-image'
import HeroBg from "../images/IsItJustMe"
import InstantAlerts from "../images/InstantAlerts.svg"
import CommunitySharing from "../images/CommunitySharing.svg"
import PrivacySecurity from "../images/PrivacySecurity.svg"
import HowItWorksSection from "../components/how-it-works"
import WhoForSection from "../components/who-for"
import CtaSection from "../components/cta"
import ContactSection from "../components/contact"


const scrollTo = (e, sectionName) => {
    const section = document.getElementById(`${sectionName}`)
    e.preventDefault()
    section && section.scrollIntoView({ behavior: "smooth", block: "start" })
}


const IndexPage = () => {
  const [isHero, setIsHero] = useState(false)
  return (
    <Layout isArticle={false} isHero={isHero} scrollTo={scrollTo}>
        <div className="hero-container">
            <div className="hero-container-sub">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="hero-content">
                                <h1>Is the Internet Down?<br/>Find Out Together!</h1>
                                <h3>Create or join a community to monitor your Wi-Fi health instantly. Get the free Chrome extension for home and work.</h3>
                                <div className="hero-cta">
                                    <div className="btn-container">
                                        <a className="btn hero-btn-last" href="" target="_blank" rel="noreferrer">Add to Chrome</a> 
                                    </div>
                                </div>
                            </div>
                            <div className="hero-image">
                                <div className="hero-image-container">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="about" className="about-container">
            <Waypoint>
                <div className="about-info">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <h2 className="highlight-heading">Why You'll Love It</h2>
                                <p><span className="text-accent">Real-Time Wi-Fi Status at a Glance:</span> Your Chrome browser icon changes color from Green (Everything's great), to Amber (Issues detected), to Red (Major outage). No more guessing if it's your Wi-Fi or the Internet.</p>
                            </div>
                            <div className="col-lg-4">

                            </div>
                            <div className="col-lg-4">
                                <p><span className="text-accent">Visibility of Others' Status:</span> If you're online, you will be able to see if others in your group go offline. If you are offline, however, you won’t be able to tell the status of others. When delays occur, they'll be clearly visible if you're online.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <p><span className="text-accent">Stay Connected with Your Community:</span> By joining a group of family, friends, or coworkers, you can instantly see if others in your group are experiencing the same connection problems. It's like a "Wi-Fi health check" with your trusted circle.</p>
                                <p><span className="text-accent">Simple Setup, Zero Hassle:</span> Install in seconds and start monitoring your connection right away. There's nothing to configure—just click, join or create your community, and stay informed!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Waypoint>
            <div className="about-profiles">
                <div className="container features-list-container">
                    <Waypoint>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="profile-first">
                                    <img src={InstantAlerts} alt="A person stood next to a list of alerts." />
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
                                    <img src={CommunitySharing} alt="A trio of people sharing internet status." />
                                </div>
                            </div>
                            <div className="col-md-8 order-md-1 profile-text">
                                <div className="profile-text-container ms-5 me-5">
                                    <h5>Community Sharing</h5>
                                    <p>Easily connect with others in your group to check if they're facing the same connectivity issues. While online, you'll be able to see if others in your group go offline (if you're offline, you can't see their status).</p>
                                </div>
                            </div>
                        </div>
                    </Waypoint>
                    <Waypoint>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="profile-last">
                                    <img src={PrivacySecurity} alt="A person stood by a padlock symbolising privacy and security." />
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
        <HowItWorksSection />
        <WhoForSection />
        <CtaSection />
        <ContactSection />
    </Layout>
  )
}

export default IndexPage
