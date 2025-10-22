import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from "../components/seo"
import { Flex, Title, Text, Button, Divider } from '@mantine/core'
import '../styles/index.css'

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Aurélio Miranda">

        <div className='spacing'></div>

        <Flex align="center" justify="space-between" direction={{ base: "column", sm: "row" }}>
          <div>
            <h1 className="heading">
              Hi! I'm
              <br />
              <span className="highlight">Aurélio Miranda</span>,
              <br />
              Full-Stack Developer
            </h1>
            <Text size="lg" color="dimmed">
              Usually when I'm not working on a project I'm thinking about a new one.
            </Text>
            <Button
              component={Link}
              to="/portfolio"
              size="lg"
              variant="gradient"
              gradient={{ from: "indigo", to: "cyan" }}
              style={{ marginTop: "1rem" }}
            >
              Explore My Work
            </Button>
          </div>

          <StaticImage
            alt="Personal picture"
            src="../images/picture.png"
            width="500"
            height="500"
            style={{ transform: 'scaleX(-1)', borderRadius: '50%' }}
          />
        </Flex>

        <div className='spacing'></div>

        <Divider my="lg" />

        <div className='spacing'></div>

        <Title color='rebeccapurple' size="45px">Welcome!</Title>
        <Text size="lg" className="text" mt="md">
          Welcome to my personal portfolio: a showcase of my career as a Software Engineer. Here, you'll find
          a collection of my projects, achievements, and skills that define my professional expertise.
        </Text>

        <div className='spacing'></div>

        <Title color="rebeccapurple" size="45px">My Skills</Title>
        <br />
        <Text size="lg" className="text" mt="md">
          &emsp;&emsp;Over the course of my professional journey, I have learned and
          improved a diverse range of skills that have helped me be a more proficient
          and accomplished software developer. Some of those skills are listed below. 👇
        </Text>
        <br />
        <div className="skills-section">
          <div className="skills-card">
            <h3>Core Programming Skills</h3>
            <p>C#</p>
            <p>Java</p>
            <p>JavaScript/TypeScript</p>
            <p>Python</p>
          </div>
          <div className="skills-card">
            <h3>Front-End Development</h3>
            <p>Next.js</p>
            <p>React</p>
            <p>MaterialUI</p>
            <p>MantineUI</p>
          </div>
          <div className="skills-card">
            <h3>Back-End Development</h3>
            <p>Node.js (Express.js)</p>
            <p>Firebase</p>
            <p>MongoDB</p>
            <p>PostgreSQL</p>
          </div>
          <div className="skills-card">
            <h3>DevOps</h3>
            <div>
              <p>Docker</p>
              <p>Kubernetes</p>
            </div>
          </div>
          <div className="skills-card">
            <h3>Cloud</h3>
            <p>Vercel</p>
            <p>Azure (Cosmos DB, Blob Storage)</p>
            <p>Netlify</p>
          </div>
        </div>

        <div className='spacing'></div>

        <Title color='rebeccapurple' size="45px">Learn More</Title>
        <Text size="lg" className="text" mt="md">
          Discover more about me in the <Link className='link' to="/about">About</Link> section or explore my projects in the <Link className='link' to="/portfolio">Portfolio</Link> section.
        </Text>

        <div className='spacing'></div>
      </Layout>
    </main>
  )
}

export default IndexPage

export const Head = () => <Seo />