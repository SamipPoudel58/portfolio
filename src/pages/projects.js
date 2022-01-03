import React from "react"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Head from "../components/Head"
import Navigation from "../components/Navigation"
import Project from "../components/Project"
import data from "../data/projects.json"

export default function Projects() {
  return (
    <div>
      <Head
        title="Projects | Samip Poudel"
        ogtitle="Projects made by Samip Poudel"
        description="These are some of the projects that I have built over the years. These project reflect my passion in software and design. My most used tools are Javascript, React, Node and MongoDB."
        url="https://www.samippoudel.com.np/projects"
      />
      <Navigation active={false} />
      <div className="py-3"></div>

      <section className="projects limit-width-lg ">
        <h1 className="heading-lg text-left">Projects</h1>
        <p className="paragraph">
          These are some of the projects that I have built over the years that
          reflect my passion in software and design.
        </p>

        {data.map((project, index) => (
          <Project
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            stacks={project.stacks}
            link={project.link}
            github={project.github}
            index={index}
          />
        ))}
      </section>

      <Contact />
      <Footer />
    </div>
  )
}
