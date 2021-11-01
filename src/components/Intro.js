import React from "react"

const Intro = () => {
  return (
    <section className="intro__wrapper">
      <div className="intro">
        <div className="intro__content">
          <img
            className="intro__sun"
            src="/retro-sun.png"
            alt="retro sun background"
          />
          <h1 className="intro__info text-center">Developer | Designer</h1>

          {/* <p className="intro__hello">Hello, I'm a</p>
          <h1 className="intro__info">Full-Stack Developer</h1>
          <p className="intro__subinfo">
            who loves designing and building :&#41;
          </p>
          */}
        </div>
        <div className="intro__ctaHolder">
          <a className="intro__cta" href="/#contact">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}

export default Intro
