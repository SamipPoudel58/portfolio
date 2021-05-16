import React from "react"
import Intro from "../components/Intro"
import Navigation from "../components/Navigation"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import "../styles/index.scss"

export default function Home() {
  return (
    <div>
      <Intro />
      <Projects />
      <Skills />
    </div>
  )
}
