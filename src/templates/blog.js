import { graphql } from "gatsby"
import React from "react"
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
        file {
          url
        }
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

const Blog = props => {
  const htmlContent =
    props.data.contentfulBlogPost.body.childMarkdownRemark.html

  return (
    <div className="blogTemplate__wrapper">
      <Head
        title={props.data.contentfulBlogPost.title}
        ogtitle={props.data.contentfulBlogPost.title}
        description={`Article by Samip Poudel on the topic ${props.data.contentfulBlogPost.title}`}
        image={`https:${props.data.contentfulBlogPost.cover.file.url}`}
        url={`https://www.samippoudel.com.np/blog/${props.data.contentfulBlogPost.title}`}
        typeOfContent="article"
      />
      <Navigation active={true} />
      <a href="#blogTemplate__cover">
        <div className="navigateUp">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7l4-4m0 0l4 4m-4-4v18"
            />
          </svg>
        </div>
      </a>
      <div className="py-3"></div>
      <section className="blogTemplate limit-width-blog">
        <GatsbyImage
          id="blogTemplate__cover"
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
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        ></div>
        <hr className="blogTemplate__hr" />
      </section>
      <Contact />
      <Footer />
    </div>
  )
}

export default Blog
