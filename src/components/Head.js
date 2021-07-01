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

      <meta
        property="og:title"
        content="Colby Fayock - Software Engineer &amp; Freelancer"
      />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/open_graph.png" />
      <meta
        property="og:description"
        content="Fullstack Web Developer, Javascript | React | Node.js | MongoDB"
      />
      <meta property="og:url" content="https://www.samippoudel.com.np" />

      <script
        defer
        data-domain="samippoudel.com.np"
        src="https://plausible.io/js/plausible.js"
      ></script>
    </Helmet>
  )
}

export default Head
