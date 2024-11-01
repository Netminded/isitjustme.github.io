import * as React from 'react'
import Nav from './nav'
import Footer from './footer'
import SEO from './seo'
import CookieBanner from './cookie'

const Layout = ({ title, description, keywords, image, simpleNav, isHero, scrollTo, children }) => {
  return (
    <>
      <SEO title={title} description={description} image={image} keywords={keywords} />
      <Nav simpleNav={simpleNav} isHero={isHero} scrollTo={scrollTo} />
      <main>
        {children}
        <Footer />
      </main>
      <CookieBanner />
    </>
  )
}
export default Layout