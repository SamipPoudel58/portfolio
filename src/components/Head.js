import React from "react"
import { Helmet } from "react-helmet"

const Head = ({ title, ogtitle, description, image, url, typeOfContent }) => {
  return (
    <Helmet>
      <html lang="en" />
      <title>{`${title} | Samip Poudel`}</title>

      <meta name="description" content={description} />
      <meta
        name="keyword"
        content="samip, samip poudel, portfolio, javascript, developer, blog"
      ></meta>

      <meta property="og:title" content={ogtitle} />
      <meta property="og:type" content={typeOfContent} />
      <meta property="og:image" content={image} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />

      <script
        defer
        data-domain="samippoudel.com.np"
        src="https://plausible.io/js/plausible.js"
      ></script>
    </Helmet>
  )
}

Head.defaultProps = {
  title: "Samip Poudel",
  ogtitle: "Samip Poudel - Software Engineer &amp; Freelancer",
  description:
    "Fullstack Web Developer, Javascript | React | Node.js | MongoDB",
  image: "https://www.samippoudel.com.np/open_graph.png",
  url: "https://www.samippoudel.com.np",
  typeOfContent: "website",
}

export default Head
