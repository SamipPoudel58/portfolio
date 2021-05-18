import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import Navigation from "../components/Navigation"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Head from "../components/Head"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
            cover {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  `)

  return (
    <div>
      <Head title="Blogs by Samip" />
      <Navigation active={true} />
      <div className="py-3"></div>
      <section className="blog limit-width-sm">
        <h1 className="blog__heading">Blog</h1>
        <p className="blog__intro">
          I write about web development and share my experiences as a developer.
        </p>
        <div className="blog__blogs">
          {data.allContentfulBlogPost.edges.map(edge => (
            <Link to={edge.node.slug}>
              <div className="blog__blog">
                <div className="blog__details">
                  <h3 className="blog__details-title">{edge.node.title}</h3>
                  <p className="blog__details-date">
                    {edge.node.publishedDate}
                  </p>
                </div>
                <GatsbyImage
                  className="blog__cover"
                  image={getImage(edge.node.cover)}
                  alt="coverPhoto"
                />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Blog
