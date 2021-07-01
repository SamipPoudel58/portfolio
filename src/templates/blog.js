import { graphql } from "gatsby"
import React, { useEffect } from "react"
import MarkdownIt from "markdown-it"
import Prism from "prismjs"
import Navigation from "../components/Navigation"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Head from "../components/Head"
import "../styles/prism-dracula.css"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      cover {
        gatsbyImageData(layout: FULL_WIDTH)
      }
      body {
        childMarkdownRemark {
          html
          timeToRead
        }
      }
    }
  }
`

const md = new MarkdownIt({
  html: true,
  linkify: false,
})

const Blog = props => {
  const htmlContent =
    props.data.contentfulBlogPost.body.childMarkdownRemark.html

  useEffect(() => {
    Prism.highlightAll()
  })

  return (
    <div className="blogTemplate__wrapper">
      <Head
        title={props.data.contentfulBlogPost.title}
        ogtitle={props.data.contentfulBlogPost.title}
        description={`Article by Samip Poudel on the topic ${props.data.contentfulBlogPost.title}`}
        image={props.data.contentfulBlogPost.cover}
        url={`https://www.samippoudel.com.np/blog/${props.data.contentfulBlogPost.title}`}
        typeOfContent="article"
      />
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
          {props.data.contentfulBlogPost.publishedDate} .{" "}
          {props.data.contentfulBlogPost.body.childMarkdownRemark.timeToRead}{" "}
          min read
        </p>
        <div
          className="blogTemplate__content"
          dangerouslySetInnerHTML={{ __html: md.render(htmlContent) }}
        ></div>
        <hr className="blogTemplate__hr" />
      </section>
      <Contact />
      <Footer />
    </div>
  )
}

export default Blog
