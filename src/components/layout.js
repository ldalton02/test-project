import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"

import Header from "./Header/Header"
import "./layout.css"

import firebase from "gatsby-plugin-firebase"
import 'firebase/auth';

/*
idea

Implemet login storage/state in the top level layout component.
Will be able to store if the user is logged in here and pass down to every component


*/

const Layout = ({ children }) => {
  const [loggedin, setLoggedin] = useState(false);

  const [currUser, setCurrUser] = useState(null);

  // set a watch on auth object to do this?

  const onAuth = firebase.auth().onAuthStateChanged(firebaseUser => {
    setCurrUser(firebaseUser);
  })

  return (
    <div className="App">
      <Header siteTitle="Make a Bucket List" />
      {children}
      <footer
        style={{
          marginTop: `2rem`,
        }}
      >
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
