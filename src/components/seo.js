import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description, image, keywords }) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)
  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
    defaultKeywords,
    shortTitle,
    appleTouchIcon
  } = site.siteMetadata
  
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
    keywords: keywords || defaultKeywords,
  }

  return (
    <Helmet title={seo.title} titleTemplate={title ? titleTemplate : ""}> 
      <meta name="apple-mobile-web-app-title" content={shortTitle}></meta>
      <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
      <meta name="application-name" content={shortTitle}></meta>  
      <meta name="description" content={seo.description} />
      {seo.keywords && <meta name="keywords" content={seo.keywords}></meta>}
      <meta name="image" content={seo.image} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      <meta property="og:locale" content="en_GB" />
      <meta property="og:site_name" content={defaultTitle}></meta>
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
    </Helmet>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  keywords: PropTypes.string
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  keywords: null
}

const query = graphql`
query SEO {
    site {
      siteMetadata {
        defaultDescription: description  
        defaultImage: image
        defaultTitle: title
        defaultKeywords: keywords
        appleTouchIcon
        shortTitle
        siteUrl
        titleTemplate
      }
    }
  }
`