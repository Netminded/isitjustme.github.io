import * as React from 'react'
import { Link } from 'gatsby'
import IsItJustMeLogo from '../images/IsItJustMe_Logo.svg'
import { useState } from 'react'

const toggleNav = (e, setShowCollapsedNav, showCollapsedNav) => {
    e.preventDefault()
    setShowCollapsedNav(!showCollapsedNav)
}

const Nav = ({simpleNav, isHero, scrollTo}) => {
    const [showCollapsedNav, setShowCollapsedNav] = useState(false)
    return (
        <>
            <nav className={`navbar navbar-expand-xl navbar-dark ${isHero ? "menu-scrolling-hero" : "menu-scrolling-content"}`}>
                <div className="me-auto tog-container">
                    <Link className="navbar-brand" to="/">
                        <img src={IsItJustMeLogo} alt="Is It Just Me? Logo"/>
                    </Link>
                    <button className="navbar-toggler" type="button" onClick={(e) => toggleNav(e, setShowCollapsedNav, showCollapsedNav )} data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className={`collapse navbar-collapse nav-collapse ${showCollapsedNav ? "show" : ""}`} id="navbarCollapse">
                    {!simpleNav ? <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="javascript:void(0)" onClick={(e) => scrollTo(e, "about")}>Why You'll Love It</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="javascript:void(0)" onClick={(e) => scrollTo(e, "services")}>How It Works</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="javascript:void(0)" onClick={(e) => scrollTo(e, "platform")}>Who Is This For?</a>
                        </li>
                        <li className="nav-item">
                            <a className="btn" href="/">Add to Chrome</a>
                        </li>
                    </ul> : 
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>
                    </ul>}
                </div>  
            </nav>
        </>
    )
}

export default Nav