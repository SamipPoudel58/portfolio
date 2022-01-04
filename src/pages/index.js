import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Intro from "../components/Intro"
import Navigation from "../components/Navigation"
import Skills from "../components/Skills"
import Project from "../components/Project"
import projectsData from "../data/projects.json"
// import "../styles/index.scss"
import Head from "../components/Head"

export default function Home() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            isBlog
            description
            publishedDate(formatString: "MMMM Do, YYYY")
            cover {
              gatsbyImageData(layout: FULL_WIDTH)
            }
            body {
              childMarkdownRemark {
                timeToRead
              }
            }
          }
        }
      }
    }
  `)
  return (
    <div>
      <Head />
      <Navigation active={false} />
      <Intro />
      <section className="projects limit-width-lg">
        <h1 className="text-left heading-lg">Projects</h1>
        <p className="paragraph mb-3">
          These are some of the projects that I have built over the years that
          reflect my passion in software and design.
        </p>
        {projectsData.map((project, index) => {
          if (index >= 3) return null
          return (
            <Project
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              stacks={project.stacks}
              link={project.link}
              index={index}
              github={project.github}
            />
          )
        })}
        <div className="projects__allProjects">
          <Link to="/projects">
            <span>More Projects</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-6 w-6 ml-1"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
              ></path>
            </svg>
          </Link>
        </div>
      </section>

      <section className="blog limit-width-lg">
        <h1 className="heading-lg text-left">Articles</h1>
        <p className="paragraph">
          I write about web development and share my experiences as a developer.
        </p>
        <div className="blog__blogs">
          {data.allContentfulBlogPost.edges.map((edge, index) => {
            if (edge.node.isBlog && index < 2) {
              return (
                <Link key={edge.node.slug} to={"/blog/" + edge.node.slug}>
                  <div className="blog__blog">
                    <div className="blog__details">
                      <p className="blog__details-date">
                        {edge.node.publishedDate} .{" "}
                        {edge.node.body.childMarkdownRemark.timeToRead} min read
                      </p>
                      <h3 className="blog__details-title">{edge.node.title}</h3>
                    </div>
                    <GatsbyImage
                      className="blog__cover"
                      image={getImage(edge.node.cover)}
                      src=""
                      alt="coverPhoto"
                    />
                  </div>
                </Link>
              )
            } else {
              return null
            }
          })}
        </div>
        <div className="projects__allProjects">
          <Link to="/blog">
            <span>More Articles</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-6 w-6 ml-1"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
              ></path>
            </svg>
          </Link>
        </div>
        <div className="py-3"></div>
        <div className="py-2"></div>
      </section>

      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}
