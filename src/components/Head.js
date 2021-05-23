import React from "react"
import { Helmet } from "react-helmet"

const Head = ({ title }) => {
  return (
    <Helmet>
      <html lang="en" />
      <title>{`${title} | Samip Poudel`}</title>
      <meta
        name="description"
        content="Fullstack Web Developer, Javascript | React | Node.js | MongoDB"
      />
      <meta
        name="keyword"
        content="samip, samip poudel, portfolio, javascript, developer, blog"
      ></meta>
    </Helmet>
  )
}

export default Head
