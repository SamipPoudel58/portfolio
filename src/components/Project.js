import React from "react"

const Projects = ({ title, description, image, link, stacks }) => {
  return (
    <div className="projects__project py-3">
      <img className="projects__image" src={image} alt="project preview" />
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
          <a href="" className="projects__links-more">
            See More
          </a>
        </div>
      </div>
    </div>
  )
}

export default Projects
