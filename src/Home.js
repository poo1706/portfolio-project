import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1>Welcome to the App</h1>
        <nav>
        <Link to="/about">About</Link> |{" "}
        <Link to="/projects">Projects</Link>|{" "}
        <Link to="/skills">Skills</Link>|{" "}
        <Link to="/resume">Resume</Link>|{" "}
        <Link to="/contact">Contact</Link>
        </nav>
    </div>
  )
}

export default Home