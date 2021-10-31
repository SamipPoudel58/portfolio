import React from "react"

const Intro = () => {
  return (
    <section className="intro__wrapper">
      <div className="intro">
        <div className="intro__content">
          <p className="intro__hello">Happy Halloween, I'm a spooky</p>
          <h1 className="intro__info">
            Full-Stack Developer{" "}
            <span role="img" aria-label="ghost emoji">
              👻
            </span>
          </h1>
          <a className="intro__cta" href="/#contact">
            Contact Me{" "}
            <span role="img" aria-label="evil emoji">
              😈
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Intro
