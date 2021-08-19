import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"

import Header from "./Header/Header"
import "./layout.css"

import firebase from "gatsby-plugin-firebase"
import 'firebase/auth';

const Layout = ({ children }) => {
  const [loggedin, setLoggedin] = useState(false);

  const [currUser, setCurrUser] = useState(null);

  return (
    <div className="App">
      <Header siteTitle="Make a Bucket List" />
      {children}
      <footer
        style={{
          marginTop: `2rem`,
        }}
        className="footer-style"
      >
        <span className="footer-left-section">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </span>
        <span className="footer-middle-section"> Designed and Built by Luke Dalton </span>
        <span className="footer-right-section">
          View the source code here!
        </span>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
