import { Link } from "gatsby"
import React, { useState, useEffect } from "react"

const Navigation = ({ active }) => {
  const [navbar, setNavbar] = useState(active)

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", changeBackground)
    }
  })

  const changeBackground = () => {
    if (window.scrollY >= Math.round(window.innerHeight)) {
      setNavbar(true)
    } else {
      if (!active) {
        setNavbar(false)
      }
    }
  }

  const burgerClickHandler = () => {
    document.querySelector(".navigation__hiddenNav").classList.toggle("shown")
    document.getElementById("burger-container").classList.toggle("open")
  }
  return (
    <header
      className={
        navbar
          ? "navigation__wrapper navigation__wrapper-active"
          : "navigation__wrapper"
      }
    >
      <div className="limit-width-lg navigation">
        <h1>
          <Link to="/" className="navigation__logo">
            Samip Poudel
          </Link>
        </h1>
        <nav className="navigation__mainNav">
          <ul className="navigation__navlinks">
            <li>
              <Link
                className="navigation__navlink"
                activeClassName="navigation__navlink-active"
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="navigation__navlink"
                activeClassName="navigation__navlink-active"
                to="/projects"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                className="navigation__navlink"
                activeClassName="navigation__navlink-active"
                to="/blog"
              >
                Blog
              </Link>
            </li>
          </ul>
        </nav>

        <nav className="navigation__hiddenNav">
          <ul className="navigation__hiddenNav__navlinks">
            <li>
              <Link
                className="navigation__hiddenNav__navlink"
                activeClassName="navigation__hiddenNav__navlink-active"
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="navigation__hiddenNav__navlink"
                activeClassName="navigation__hiddenNav__navlink-active"
                to="/projects"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                className="navigation__hiddenNav__navlink"
                activeClassName="navigation__hiddenNav__navlink-active"
                to="/blog"
              >
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div
        id="burger-container"
        onClick={burgerClickHandler}
        onKeyDown={burgerClickHandler}
        role="button"
        tabIndex={0}
      >
        <div id="burger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  )
}

export default Navigation
