import React from "react"
import Navigation from "../components/Navigation"

const NotFound = () => {
  return (
    <div className="notFound">
      <Navigation active={true} />

      <div className="notFound__content">
        <h1>404</h1>
        <p className="notFound__text">
          Page Not Found{" "}
          <span role="img" aria-label="confused face emoji">
            😕
          </span>
        </p>
      </div>
    </div>
  )
}

export default NotFound
