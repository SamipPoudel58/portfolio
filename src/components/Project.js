import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Projects = ({ title, description, github, index, link, stacks }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: { relativeDirectory: { eq: "images" } }
        sort: { fields: name }
      ) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  `)

  return (
    <div className="projects__project py-3">
      <GatsbyImage
        className="projects__image"
        image={getImage(data.allFile.edges[index].node)}
        alt={`cover photo for project "${title}"`}
      />
      <div className="projects__detail">
        <h2 className="projects__title">{title}</h2>
        <p className="projects__description">{`${description.substring(
          0,
          30
        )}...`}</p>
        <div className="projects__stacks">
          {stacks.map((stack, index) => (
            <div key={index} className="projects__stack">
              {stack}
            </div>
          ))}
        </div>
        <div className="projects__links">
          <a href={link} className="projects__links-live">
            View Live
          </a>
          <a href={github} className="projects__links-more">
            See More
          </a>
        </div>
      </div>
    </div>
  )
}

export default Projects
