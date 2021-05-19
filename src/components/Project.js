import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const Projects = ({ title, description, image, index, link, stacks }) => {
  const data = useStaticQuery(graphql`
    query {
      allImageSharp {
        edges {
          node {
            gatsbyImageData
          }
        }
      }
    }
  `)
  return (
    <div className="projects__project py-3">
      <GatsbyImage
        className="projects__image"
        image={data.allImageSharp.edges[index].node.gatsbyImageData}
        alt="coverPhoto"
      />
      <div className="projects__detail">
        <h2 className="projects__title">{title}</h2>
        <p className="projects__description">{`${description.substring(
          0,
          40
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
          <a href={link} className="projects__links-more">
            See More
          </a>
        </div>
      </div>
    </div>
  )
}

export default Projects
