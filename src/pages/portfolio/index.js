import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Badge, Title } from '@mantine/core';
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import '../../styles/index.css'
import '../../styles/portfolio.css'

const PortfolioPage = ({ data }) => {
  return (
    <Layout pageTitle="My Portfolio Posts">

      <br />
      <br />
      <br />
      <Title color='rebeccapurple' size="45px">My projects</Title>
      <br />

      <div className='all-nodes'>
        {
          data.allMdx.nodes.map(node => (
            <article key={node.id}>
              <div className='article-container'>
                <div className='title'>
                  <h2>
                    {node.frontmatter.title}
                  </h2>
                  <h2>{node.frontmatter.date}</h2>
                </div>
                <p>{node.excerpt}</p>
                <div className='badges'>
                  <Badge color="green">{node.frontmatter.language_1}</Badge>
                  {node.frontmatter.language_2 !== "" && <Badge color="green">{node.frontmatter.language_2}</Badge>}
                  {node.frontmatter.language_3 !== "" && <Badge color="green">{node.frontmatter.language_3}</Badge>}
                  {node.frontmatter.methodology_1 !== "" && <Badge color="red">{node.frontmatter.methodology_1}</Badge>}
                  {node.frontmatter.methodology_2 !== "" && <Badge color="red">{node.frontmatter.methodology_2}</Badge>}
                  <Badge color="gray">{node.frontmatter.technology_1}</Badge>
                </div>
              </div>
              <div className='image-container'>
                <GatsbyImage
                  image={getImage(node.frontmatter.hero_image)}
                  alt={node.frontmatter.hero_image_alt}
                  className='image' />
                <div className='img-description'>{node.frontmatter.img_description}</div>
              </div>
            </article>
          ))
        }
      </div>

    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: [frontmatter___date, frontmatter___title], order: [DESC, ASC]}) {
      nodes {
        frontmatter {
          date
          title
          slug
          hero_image_alt
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
          img_description
          language_1
          language_2
          language_3
          technology_1
          methodology_1
          methodology_2
          content
        }
        id
        excerpt
      }
    }
  }
`

export const Head = () => <Seo title="My Portfolio" />

export default PortfolioPage