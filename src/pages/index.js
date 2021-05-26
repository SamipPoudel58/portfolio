import React from "react"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Intro from "../components/Intro"
import Navigation from "../components/Navigation"
import Skills from "../components/Skills"
import Project from "../components/Project"
import data from "../data/projects.json"
// import "../styles/index.scss"
import Head from "../components/Head"

export default function Home() {
  return (
    <div>
      <Head title="Home" />
      <Navigation active={false} />
      <Intro />
      <section className="projects limit-width-lg">
        <h1 className="heading-lg">Projects</h1>
        {data.map((project, index) => {
          if (index >= 3) return null
          return (
            <Project
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              stacks={project.stacks}
              link={project.link}
              index={index}
              github={project.github}
            />
          )
        })}
        <div className="projects__allProjects">
          <a href="/projects">
            More Projects <span>&rarr;</span>
          </a>
        </div>
      </section>
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}
