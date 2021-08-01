import React, { useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Projects = ({ title, description, github, index, link, stacks }) => {
  const data = useStaticQuery(graphql`
    query {
      allImageSharp(sort: { fields: fluid___originalName }) {
        edges {
          node {
            gatsbyImageData
          }
        }
      }
    }
  `)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const image = entry.target.querySelector(".projects__image")
        if (entry.isIntersecting) {
          image.classList.add("projects__image-animate")
        } else {
          // We're not intersecting, so remove the class!
          image.classList.remove("projects__image-animate")
        }
      })
    })
    const projectEntries = document.querySelectorAll(".projects__project")
    projectEntries.forEach(entry => {
      observer.observe(entry)
    })
  }, [])

  return (
    <div className="projects__project py-3">
      <GatsbyImage
        className="projects__image"
        image={getImage(data.allImageSharp.edges[index].node)}
        alt={`cover photo for project "${title}"`}
      />
      <div className="projects__detail">
        <h2 className="projects__title">{title}</h2>
        <p className="projects__description">{`${description.substring(0, 50)}${
          description.length >= 50 ? "..." : ""
        }`}</p>
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
