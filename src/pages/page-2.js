import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Header from "../components/Header/Header"

import { Redirect } from "@reach/router"

const SecondPage = () => (
  <Redirect to="/" />
)

export default SecondPage