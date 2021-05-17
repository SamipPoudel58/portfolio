import { Link } from "gatsby"
import React, { useState } from "react"

const Navigation = ({ active }) => {
  const [navbar, setNavbar] = useState(active)

  const changeBackground = () => {
    if (window.scrollY >= Math.round(window.innerHeight)) {
      setNavbar(true)
    } else {
      if (!active) {
        setNavbar(false)
      }
    }
  }

  window.addEventListener("scroll", changeBackground)
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
        <nav>
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
      </div>
    </header>
  )
}

export default Navigation
