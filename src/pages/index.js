import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import HomePage from '../components/HomePage/HomePage'
import Header from "../components/Header/Header"
import { BrowserRouter as Router, Route, Switch } from 'react-router';
import Ideas from "../components/Ideas/Ideas.jsx"

const IndexPage = () => {
  return (
    <Router>
      <div className="App">
        <HomePage />
      </div>
    </Router>
  );
}

export default IndexPage
