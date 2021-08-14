import React, { useState } from "react"
import { Link } from "gatsby"
import Header from "../components/Header/Header"
import Ideas from '../components/Ideas/Ideas'

const SuggestionsPage = () => {
  return (
    <div className="App">
      <Header siteTitle="Make A Bucket List" />
      <Ideas />
    </div>
  );
}

export default SuggestionsPage
