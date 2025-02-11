import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Accordion, Badge, Title, Button, Group } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import '../../styles/index.css'
import '../../styles/portfolio.css'

const PortfolioPage = ({ data }) => {
  const [filter, setFilter] = React.useState('All');
  const isMobile = useMediaQuery('(max-width: 768px)');

  const languages = Array.from(
    new Set(
      data.allMdx.nodes.flatMap(node => [
        node.frontmatter.language_1,
        node.frontmatter.language_2,
        node.frontmatter.language_3,
      ]).filter(language => language && !['CSS', 'JavaFX'].includes(language))
    )
  );

  const filteredProjects = filter === 'All'
    ? data.allMdx.nodes
    : data.allMdx.nodes.filter(node =>
      [node.frontmatter.language_1, node.frontmatter.language_2, node.frontmatter.language_3].includes(filter)
    );

  return (
    <Layout pageTitle="My Portfolio Posts">
      <br />
      <Title color='rebeccapurple' size="45px">My Projects</Title>

      {isMobile ? (
        // Mobile
        <Accordion>
          <Accordion.Item value="filter">
            <Accordion.Control>Filter by Language</Accordion.Control>
            <Accordion.Panel>
              <Group direction="column" spacing="sm" style={{ marginBottom: '20px' }}>
                <Button
                  variant={filter === 'All' ? 'filled' : 'outline'}
                  fullWidth
                  styles={(theme) => ({
                    root: {
                      color: filter === 'All' ? 'rebeccapurple' : theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
                      borderColor: filter === 'All' ? 'rebeccapurple' : theme.colors.gray[4],
                    },
                  })}
                  onClick={() => setFilter('All')}
                >
                  All
                </Button>
                {languages.map(language => (
                  <Button
                    key={language}
                    variant={filter === language ? 'filled' : 'outline'}
                    fullWidth
                    styles={(theme) => ({
                      root: {
                        color: filter === language ? 'rebeccapurple' : theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
                        borderColor: filter === language ? 'rebeccapurple' : theme.colors.gray[4],
                      },
                    })}
                    onClick={() => setFilter(language)}
                  >
                    {language}
                  </Button>
                ))}
              </Group>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      ) : (
        // Desktop
        <div className='filter'>
          <span className='inside-filter'>
            <Group spacing="sm" style={{ marginBottom: '20px' }}>
              <Button
                variant={filter === 'All' ? 'filled' : 'outline'}
                styles={(theme) => ({
                  root: {
                    color: filter === 'All' ? 'rebeccapurple' : theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
                    borderColor: filter === 'All' ? 'rebeccapurple' : theme.colors.gray[4],
                  },
                })}
                onClick={() => setFilter('All')}
              >
                All
              </Button>
              {languages.map(language => (
                <Button
                  key={language}
                  variant={filter === language ? 'filled' : 'outline'}
                  styles={(theme) => ({
                    root: {
                      color: filter === language ? 'rebeccapurple' : theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
                      borderColor: filter === language ? 'rebeccapurple' : theme.colors.gray[4],
                    },
                  })}
                  onClick={() => setFilter(language)}
                >
                  {language}
                </Button>
              ))}
            </Group>
          </span>
        </div>
      )}

      <div className='all-nodes'>
        {filteredProjects.map(node => (
          <article key={node.id}>
            <div className='article-container'>
              <div className='title'>
                <h2>{node.frontmatter.title}</h2>
                <h2>{node.frontmatter.date}</h2>
              </div>
              <div className='statements'>
                &emsp;&emsp;{node.frontmatter.statement_1}
                <br />
                <br />
                &emsp;&emsp;{node.frontmatter.statement_2}
                {node.frontmatter.link &&
                  <>
                    <br />
                    &emsp;&emsp;
                    <span>Check out {node.frontmatter.title} <a href={node.frontmatter.link} target="_blank" rel="noreferrer">here</a>.</span>
                  </>}
              </div>
              <div className='badges'>
                <Badge color="green">{node.frontmatter.language_1}</Badge>
                {node.frontmatter.language_2 && <Badge color="green">{node.frontmatter.language_2}</Badge>}
                {node.frontmatter.language_3 && <Badge color="green">{node.frontmatter.language_3}</Badge>}
                {node.frontmatter.methodology_1 && <Badge color="red">{node.frontmatter.methodology_1}</Badge>}
                {node.frontmatter.methodology_2 && <Badge color="red">{node.frontmatter.methodology_2}</Badge>}
                <Badge color="gray">{node.frontmatter.technology_1}</Badge>
                {node.frontmatter.technology_2 && <Badge color="gray">{node.frontmatter.technology_2}</Badge>}
                {node.frontmatter.type && <Badge color="cyan">{node.frontmatter.type}</Badge>}
              </div>
            </div>
            <div className='image-container'>
              <GatsbyImage
                image={getImage(node.frontmatter.hero_image)}
                alt={node.frontmatter.hero_image_alt}
                className='image'
              />
              <div className='img-description'>{node.frontmatter.img_description}</div>
            </div>
          </article>
        ))}
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
          technology_2
          methodology_1
          methodology_2
          type
          statement_1
          statement_2
          link
        }
        id
        excerpt
      }
    }
  }
`

export const Head = () => <Seo title="My Portfolio" />

export default PortfolioPage