import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import Navigation from "../components/Navigation"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Head from "../components/Head"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            isBlog
            description
            publishedDate(formatString: "MMMM Do, YYYY")
            cover {
              gatsbyImageData(layout: FULL_WIDTH)
            }
            body {
              childMarkdownRemark {
                timeToRead
              }
            }
          }
        }
      }
    }
  `)
  return (
    <div className="blog__wrapper">
      <Head
        title="Blogs | Samip Poudel"
        ogtitle="Blogs by Samip Poudel"
        description="I write and share about programming and my journey as a software engineer. I like to write about web development, UI/UX and a bit about life as I experience it."
        url="https://www.samippoudel.com.np/blog"
      />
      <Navigation active={false} />
      <div className="py-3"></div>
      <section className="blog limit-width-lg">
        <h1 className="heading-lg text-left">Blog</h1>
        <p className="paragraph">
          I write about web development and share my experiences as a developer.
        </p>
        <div className="blog__blogs">
          {data.allContentfulBlogPost.edges.map(edge => {
            if (edge.node.isBlog) {
              return (
                <Link key={edge.node.slug} to={edge.node.slug}>
                  <div className="blog__blog">
                    <div className="blog__details">
                      <p className="blog__details-date">
                        {edge.node.publishedDate} .{" "}
                        {edge.node.body.childMarkdownRemark.timeToRead} min read
                      </p>
                      <h3 className="blog__details-title">{edge.node.title}</h3>
                    </div>
                    <GatsbyImage
                      className="blog__cover"
                      image={getImage(edge.node.cover)}
                      src=""
                      alt="coverPhoto"
                    />
                  </div>
                </Link>
              )
            } else {
              return null
            }
          })}
        </div>
      </section>
      <div className="py-3"></div>
      <Contact />
      <Footer />
    </div>
  )
}

export default Blog
