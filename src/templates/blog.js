import { graphql } from "gatsby"
import React from "react"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Navigation from "../components/Navigation"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Head from "../components/Head"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      cover {
        gatsbyImageData(layout: FULL_WIDTH)
      }
      body {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            __typename
            fixed(width: 1600) {
              width
              height
              src
              srcSet
            }
          }
        }
      }
    }
  }
`

const Blog = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        return (
          <img src={node.data.target.fixed.src} alt={node.data.target.title} />
        )
      },
    },
  }
  return (
    <div>
      <Head title={props.data.contentfulBlogPost.title} />
      <Navigation active={true} />
      <div className="py-3"></div>
      <section className="blogTemplate limit-width-sm">
        <GatsbyImage
          className="blogTemplate__cover"
          image={getImage(props.data.contentfulBlogPost.cover)}
          alt="coverPhoto"
        />
        <h1 className="blogTemplate__title">
          {props.data.contentfulBlogPost.title}
        </h1>
        <p className="blogTemplate__date">
          {props.data.contentfulBlogPost.publishedDate}
        </p>
        <div className="blogTemplate__content">
          {renderRichText(props.data.contentfulBlogPost.body, options)}
        </div>
        <hr className="blogTemplate__hr" />
      </section>
      <Contact />
      <Footer />
    </div>
  )
}

export default Blog
