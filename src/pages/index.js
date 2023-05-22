import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from "../components/seo"
import { Badge, Flex, Title } from '@mantine/core';
import '../styles/index.css'

const IndexPage = () => {
  const badgeStyles = {
    color: 'rebeccapurple',
  };

  return (
    <main>
      <Layout pageTitle="Aurélio Miranda">
        <br />
        <br />
        <br />
        <Flex align="center" justify="space-between">
          <h1 className="heading">
            Hi! I'm
            <br />
            Aurélio Miranda,
            <br />
            FullStack Developer</h1>

          <StaticImage
            alt="Personal picture"
            src="../images/placeholder.png"
            width="500"
            style={{ transform: 'scaleX(-1)' }}
          />
        </Flex>

        <br />
        <br />
        <br />

        <Title>Welcome to my personal portfolio, a comprehensive showcase of my skills,
          projects, and notable achievements as a Software Engineer. As you
          navigate through my portfolio, you'll gain insights into my expertise and
          the depth of my capabilities.</Title>

        <br />
        <br />
        <br />

        <div className="top_container_ps">
          <Flex direction="column" justify="flex-end">
            <Title color='rebeccapurple'>Core Programming Skills:</Title>
            <br/>
            <div className="ps_container">
              <Badge size="lg" color="orange">C#</Badge>
              <Badge size="lg" color="red">Java</Badge>
              <Badge size="lg" color="green">JavaScript</Badge>
              <Badge size="lg" color="gray">.net</Badge>
              <Badge size="lg" color="pink">React</Badge>
              <Badge size="lg" color="grape">Python</Badge>
              <Badge size="lg">Unity</Badge>
              <Badge size="lg" color="cyan">html</Badge>
              <Badge size="lg" color="teal">CSS</Badge>
            </div>
            <br/>
          </Flex>

          <StaticImage
            alt="Visual description of a software development process."
            src="..\images\development.png"
            width="400"
          />
        </div>
      </Layout>
    </main>
  )
}

export default IndexPage

export const Head = () => (
  <Seo />
)