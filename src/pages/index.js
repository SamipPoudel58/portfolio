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
      <Head />
      <Navigation active={false} />
      <Intro />
      <section className="projects limit-width-lg">
        <h1 className="text-left heading-lg">Projects</h1>
        <p className="paragraph mb-3">
          These are some of the projects that I have built over the years that
          reflect my passion in software and design.
        </p>
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
          <a href="/projects">More Projects</a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="h-6 w-6 ml-1"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
            ></path>
          </svg>
        </div>
      </section>
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}
