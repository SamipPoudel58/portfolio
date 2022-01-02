import React from "react"

const Intro = () => {
  return (
    <section className="intro__wrapper">
      <div className="intro">
        <div className="intro__content">
          <div className="intro__texts">
            <h1 className="intro__name">Samip Poudel</h1>
            <p className="intro__job">
              Software Engineer and Designer (very cool)
            </p>

            <p className="intro__job mt-1">
              I have fixed several TV Remotes in my years as a software engineer
              and have designed several logos for companies like Samiptter.
            </p>

            <p className="intro__job mt-1">
              I used black and white photo so that people will take me
              seriously. That’s also my tinder DP
            </p>
          </div>
          <div className="intro__image">
            <img src="/profile.jpg" alt="profile" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro
