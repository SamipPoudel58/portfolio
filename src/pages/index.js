import React from "react"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Intro from "../components/Intro"
import Navigation from "../components/Navigation"
import Skills from "../components/Skills"
import Project from "../components/Project"
import data from "../data/projects.json"
import "../styles/index.scss"

export default function Home() {
  return (
    <div>
      <Navigation active={false} />
      <Intro />
      <section className="projects limit-width-lg">
        <h1 className="heading-lg">Projects</h1>

        {data.map((project, index) => {
          if (index >= 3) return 0
          return (
            <Project
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              stacks={project.stacks}
              link={project.link}
            />
          )
        })}
      </section>
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}
