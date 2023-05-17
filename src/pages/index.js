import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { SEO } from "../components/seo"

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Aurélio Miranda">
        <h1 style={{ "color": "rebeccapurple" }}>FullStack Developer</h1>
        <p>I'm making this by following the Gatsby Tutorial. </p>
        <StaticImage
        alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
        src="../images/clifford.jpg"
        />
        </Layout>
        <br/>
    </main>
  )
}

export default IndexPage

export const Head = () => (
  <SEO />
)