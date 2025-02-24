import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from "../components/seo"
import { Blockquote, Text, Title, Timeline } from '@mantine/core';
import '../styles/index.css'
import '../styles/about.css'

const AboutPage = () => {
  return (
    <main>
      <Layout pageTitle="About Me">

        <div className='spacing'></div>

        <div className='blockquote'>

          <Blockquote cite="– Marcus Aurelius">
            The impediment to action advances action. What stands in the way becomes the way.
          </Blockquote>
        </div>

        <div className='spacing'></div>

        <Title color='rebeccapurple' size="45px">whoami</Title>
        <br />
        <Text size="lg" className="text" mt="md">&emsp;&emsp;I am a software developer specialized
          in full-stack development, with a slight inclination towards front-end development.
          Currently, I am in the final year of my Masters's degree at <Link
            className="link" to="https://www.fct.unl.pt/">FCT Nova</Link>.
        </Text>
        <br />
        <Text size="lg" className="text" mt="md">
          &emsp;&emsp;Throughout
          my academic journey, I have acquired a strong grasp of software development principles,
          algorithms, data structures, and programming languages. Engaging in practical projects
          has sharpened my ability to design and implement scalable, efficient software solutions.
        </Text>

        <div className='spacing'></div>

        <Title color='rebeccapurple' size="45px">Where am I from?</Title>
        <br />
        <div className='where-container'>
          <div className='text-container'>
            <Text size="lg" className="text" mt="md">&emsp;&emsp;I hail from Sesimbra, a charming town in Setúbal, Portugal <StaticImage
              alt="Pt"
              src="../images/pt.png"
              width="30"
              height="30"
            />, known for its beautiful sunsets and exhilarating carnival. Additionally, I work in the vibrant city of Lisbon and pursue 
            my studies at Costa da Caparica.
            </Text>
            <br />
            <br />
            <Text size="lg" className="text" mt="md">
              &emsp;&emsp;These diverse
              locations have provided me with unique experiences and perspectives, allowing me to engage with the
              thriving tech industry while immersing myself in a rich academic environment.
            </Text>
          </div>
          <div className='image-caption-container'>
            <StaticImage
              alt="Sesimbra"
              src="../images/sesimbra.jpg"
              width="400"
              height="250"
            />
            <Text>
              Sesimbra, Portugal
            </Text>
          </div>
        </div>

        <div className='spacing'></div>

        <Title color='rebeccapurple' size="45px">Timeline</Title>
        <br />
        <Text size="lg" className="text" mt="md">
          &emsp;&emsp;This is a visual representation of my professional path so far.
        </Text>
        <br />
        <br />
        <div className='timeline-container'>
          <div className='timeline'>
            <Timeline active={3} bulletSize={24} lineWidth={4} reverseActive>

              <Timeline.Item title="&emsp;Let's talk!" lineVariant='dashed'>
                <Text color="dimmed" size="sm">The future holds many unexpected things like your visit to this website, now that you are
                  here, let's get in touch! Message me in one of my socials down below or <Link
                    className="link" to="/contact">send me a message</Link>!</Text>
                <Text size="xs" mt={4}>Now</Text>
              </Timeline.Item>

              <Timeline.Item title="&emsp;FCT Nova">
                <Text color="dimmed" size="sm">Currently, I am finishing my masters degree in computer science and engineering at FCT Nova
                  where I work with many technologies ranging from AI machine learning to cloud, frontend, backend and devops.</Text>
                <Text size="xs" mt={4}>2023 - Now</Text>
              </Timeline.Item>

              <Timeline.Item title="&emsp;Build Up Labs">
                <Text color="dimmed" size="sm">I completed an internship as a Full Stack Developer at Build Up Labs, where
                  I worked with various technologies including Gatsby, Meteor, Next.js, Mantine, MongoDB, and various cloud services.</Text>
                <Text size="xs" mt={4}>2023 - 2023</Text>
              </Timeline.Item>

              <Timeline.Item title="&emsp;Polytechnic Institute of Setúbal">
                <Text color="dimmed" size="sm">Throughout the past three years, I have dedicated myself to acquiring and refining
                  a wide range of skills that have contributed to my current position. These skills include valuable soft skills
                  like resilience, work ethic, and patience, as well as technical skills such as coding, debugging, testing, and
                  project management, among others.</Text>
                <Text size="xs" mt={4}>2020 - 2023</Text>
              </Timeline.Item>

              <Timeline.Item title="&emsp;Secondary School of Sampaio">
                <Text color="dimmed" size="sm">At this school, I was introduced to software development through projects
                  like calculators and mini-games. Although these assignments were simple, they were enough to spark my interest
                  and guide me towards pursuing a career in this field.</Text>
                <Text size="xs" mt={4}>2017 - 2020</Text>
              </Timeline.Item>
            </Timeline>
          </div>
        </div>
      </Layout>
    </main>
  )
}


export default AboutPage

export const Head = () => (
  <Seo title="About Me" />
)