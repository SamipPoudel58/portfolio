import React from "react"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Head from "../components/Head"
import Navigation from "../components/Navigation"
import Project from "../components/Project"
import data from "../data/projects.json"

export default function Home() {
  return (
    <div>
      <Head
        title="Projects"
        ogtitle="Projects made by Samip Poudel"
        description="Built with loads of effort and tons of love!"
        url="https://www.samippoudel.com.np/projects"
      />
      <Navigation active={true} />
      <div className="py-3"></div>
      <section className="projects limit-width-lg ">
        <h1 className="heading-lg">Projects</h1>

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
