import * as React from 'react'
import Layout from '../components/layout'
import { SEO } from "../components/seo"

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Aurélio Miranda">
        <h1 style={{ "color": "rebeccapurple" }}>FullStack Developer</h1>
        <p>I'm making this by following the Gatsby Tutorial.</p>
      </Layout>
    </main>
  )
}

export default IndexPage

export const Head = () => (
  <SEO />
)