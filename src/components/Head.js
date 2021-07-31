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
      <meta property="og:image:secure_url" content={image} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:site" content="@samip4sure" />
      <meta property="twitter:creator" content="@samip4sure" />

      <script async src="https://cdn.splitbee.io/sb.js"></script>
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
