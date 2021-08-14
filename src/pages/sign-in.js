import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Header from "../components/Header/Header"

import SignInPage from "../components/SignInPage/SignInPage"

const IndexPage = () => {
  return (
    <div className="App">
      <Header siteTitle="Make A Bucket List" />
      <SignInPage />
    </div>
  );
}

export default IndexPage
