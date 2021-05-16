import { Link } from "gatsby"
import React from "react"

const Navigation = () => {
  return (
    <header className="navigation__wrapper">
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
