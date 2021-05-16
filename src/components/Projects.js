import React from "react"

const Projects = () => {
  return (
    <section className="projects__wrapper">
      <div className="projects limit-width-lg">
        <h1 className="heading-lg">Projects</h1>

        <div className="projects__project">
          <img
            className="projects__image"
            src="/project2.png"
            alt="project preview"
          />
          <div className="projects__detail">
            <h2 className="projects__title">Samiptter</h2>
            <p className="projects__description">
              An advanced social media site
            </p>
            <div className="projects__stacks">
              <div className="projects__stack">React</div>
              <div className="projects__stack">Redux</div>
              <div className="projects__stack">Node.js</div>
              <div className="projects__stack">MongoDB</div>
            </div>
            <div className="projects__links">
              <a href="" className="projects__links-live">
                View Live
              </a>
              <a href="" className="projects__links-more">
                See More
              </a>
            </div>
          </div>
        </div>

        <div className="projects__project">
          <img
            className="projects__image"
            src="/project1.jpg"
            alt="project preview"
          />
          <div className="projects__detail">
            <h2 className="projects__title">Kollab</h2>
            <p className="projects__description">A group collaboration site</p>
            <div className="projects__stacks">
              <div className="projects__stack">React</div>
              <div className="projects__stack">Redux</div>
              <div className="projects__stack">Node.js</div>
              <div className="projects__stack">MongoDB</div>
            </div>
            <div className="projects__links">
              <a href="" className="projects__links-live">
                View Live
              </a>
              <a href="" className="projects__links-more">
                See More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
