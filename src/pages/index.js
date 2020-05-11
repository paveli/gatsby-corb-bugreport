import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image name="gatsby-astronaut.png" />
    </div>
    <Link to="/page-2/">Go to page 2</Link>{" "}
    <Link to="/page-3/">Go to page 3</Link>{" "}
    <Link to="/page-4/">Go to page 4</Link>{" "}
    <Link to="/page-5/">Go to page 5</Link>{" "}
    <Link to="/page-6/">Go to page 6</Link>
  </Layout>
)

export default IndexPage
