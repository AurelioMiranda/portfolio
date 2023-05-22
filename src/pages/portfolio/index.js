import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Text, Title } from '@mantine/core';
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import '../../styles/index.css'

const PortfolioPage = ({ data }) => {
  return (
    <Layout pageTitle="My Portfolio Posts">

      <div className='spacing'></div>

      <Title color='rebeccapurple' size="45px">My projects</Title>
      <br />

      {
        data.allMdx.nodes.map(node => (
          <article key={node.id}>
            <h2>
              {node.frontmatter.title}
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
            <GatsbyImage
              image={getImage(node.frontmatter.hero_image)}
              alt={node.frontmatter.hero_image_alt}
            />
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {frontmatter: {date: DESC}}) {
      nodes {
        frontmatter {
          date
          title
          slug
          hero_image_alt
          hero_image_credit_link
          hero_image_credit_text
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
          language_1
          language_2
          language_3
        }
        id
        excerpt
      }
    }
  }
`

export const Head = () => <Seo title="My Portfolio" />

export default PortfolioPage