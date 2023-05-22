import * as React from 'react'
import { Link } from 'gatsby'
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

        <div className='spacing'></div>

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
            height="500"
            style={{ transform: 'scaleX(-1)' }}
          />
        </Flex>

        <div className='spacing'></div>

        <hr />

        <div className='spacing'></div>

        <Title color='rebeccapurple' size="45px">Welcome!</Title>
        <br />
        <Title size="h3" className="text"> &emsp;&emsp;Welcome to my personal portfolio, a comprehensive showcase of my skills,
          projects, and notable achievements as a Software Engineer. As you
          navigate through my portfolio, you'll gain insights into my expertise and
          the depth of my capabilities.</Title>

        <div className='spacing'></div>

        <Title color='rebeccapurple' size="45px">My skills</Title>
        <br />
        <Title size="h3" className="text"> &emsp;&emsp;Over the course of my professional journey, I have diligently acquired
          and cultivated a diverse range of invaluable skills that have rendered me a proficient
          and accomplished software developer. Some of those skills are listed below. 👇</Title>
        <br />
        <div className="top_container_ps">
          <Flex direction="column" justify="flex-end">
            <Title color='rebeccapurple'>Core Programming Skills:</Title>
            <br />
            <div className="ps_container">
              <Badge size="lg" color="orange">C#</Badge>
              <Badge size="lg" color="red">Java</Badge>
              <Badge size="lg" color="green">JavaScript</Badge>
              <Badge size="lg" color="gray">asp .net</Badge>
              <Badge size="lg" color="pink">React</Badge>
              <Badge size="lg" color="grape">Python</Badge>
              <Badge size="lg">Unity</Badge>
              <Badge size="lg" color="cyan">html</Badge>
              <Badge size="lg" color="teal">CSS</Badge>
            </div>

            <div className='spacing'></div>
          </Flex>

          <StaticImage
            alt="Visual description of a software development process."
            src="..\images\development.png"
            width="400"
            height="400"
          />
        </div>

        <div className='spacing'></div>

        <Title color='rebeccapurple' size="45px">More</Title>
        <br />
        <Title size="h3" className="text"> &emsp;&emsp;You can learn more about me in my <Link className='link' to="/about">about</Link> section
          and about my projects in the <Link className='link' to="/blog">portfolio</Link> section.</Title>

          <div className='spacing'></div>
      </Layout>
    </main>
  )
}

export default IndexPage

export const Head = () => (
  <Seo />
)