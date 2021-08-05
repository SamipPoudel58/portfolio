import React from "react"
import { Helmet } from "react-helmet"

const Head = ({ title, ogtitle, description, image, url, typeOfContent }) => {
  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>

      <meta
        name="title"
        content="Samip Poudel | Full-Stack Developer | Designer"
      />
      <meta name="description" content={description} />
      <meta
        name="keyword"
        content="Samip Poudel software developer freelancer designer react nodejs javascript programming web portfolio blog Kathmandu Nepal"
      ></meta>
      <meta name="robots" content="index,follow,archive" />

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
  title: "Samip Poudel | Full-Stack Developer | Freelancer",
  ogtitle: "Samip Poudel | Full-Stack Developer | Designer",
  description:
    "Hey, I'm Samip. A freelance Full-Stack Web Developer from Nepal. I love design as much as Software Development. I work with JavaScript, TypeScript, React, Node.js & MongoDB.",
  image: "https://www.samippoudel.com.np/open_graph.png",
  url: "https://www.samippoudel.com.np",
  typeOfContent: "website",
}

export default Head
