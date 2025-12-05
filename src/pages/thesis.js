import * as React from 'react'
import Seo from '../components/seo'
import Layout from '../components/layout'
import './../styles/index.css'
import './../styles/portfolio.css'

const Thesis = () => {
  return (
    <main>
      <Layout pageTitle="Aurélio Miranda">
      <br></br>
        {typeof window !== "undefined" && (
          <iframe
            src="/thesis.pdf"
            title="Thesis PDF viewer"
            width="100%"
            height="800px"
          />
        )}

      </Layout>
    </main>
  )
}

export const Head = () => <Seo title="My Thesis" />

export default Thesis