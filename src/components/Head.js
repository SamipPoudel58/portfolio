import React from "react"
import { Helmet } from "react-helmet"

const Head = ({ title }) => {
  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta
        name="description"
        content="Fullstack Web Developer, Javascript | React | Node.js | MongoDB"
      />
      <meta
        name="keyword"
        content="portfolio, javascript, developer, blog, web development"
      ></meta>
    </Helmet>
  )
}

export default Head
