import { Link } from "gatsby"
import React, { useState, useEffect } from "react"

const Navigation = () => {
  // const [navbar, setNavbar] = useState(active)
  const [showMobileNav, setMobileNav] = useState(false)

  useEffect(() => {
    if (localStorage.getItem("darkMode")) {
      document.body.classList.add("dark")
    }
  })

  const themeToggle = () => {
    const darkMode = localStorage.getItem("darkMode")
    localStorage.setItem("darkMode", !darkMode)

    document.body.classList.toggle("dark")
  }

  const burgerClickHandler = () => {
    setMobileNav(prevValue => !prevValue)
    document.querySelector(".navigation__hiddenNav").classList.toggle("shown")
    document.getElementById("burger-container").classList.toggle("open")
  }
  return (
    <header className="navigation__wrapper">
      <div className="limit-width-lg navigation">
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
                to="/#skills"
              >
                Skills
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

        {/* Mobile Nav */}
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
            <li>
              <Link className="navigation__hiddenNav__navlink" to="/#skills">
                Skills
              </Link>
            </li>
            <li>
              <a
                className="navigation__hiddenNav__navlink"
                href="/samip-poudel-resume.pdf"
              >
                Resume
              </a>
            </li>

            <li>
              <Link className="navigation__hiddenNav__navlink" to="/#contacts">
                Contacts
              </Link>
            </li>
          </ul>
        </nav>

        <button onClick={themeToggle} className="navigation__theme">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </button>
      </div>
      <button
        id="burger-container"
        onClick={burgerClickHandler}
        onKeyDown={burgerClickHandler}
        tabIndex={0}
      >
        {showMobileNav ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        )}
      </button>
    </header>
  )
}

export default Navigation
