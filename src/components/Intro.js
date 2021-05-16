import React from "react"
import Navigation from "./Navigation"

const Intro = () => {
  return (
    <section className="intro__wrapper">
      <Navigation />
      <div className="intro">
        <div className="intro__content">
          <p className="intro__hello">Hello, I'm Samip</p>
          <h1 className="intro__info">I build Websites</h1>
          <a className="intro__cta" href="/contacts">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}

export default Intro
