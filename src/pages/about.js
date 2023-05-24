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

          <Blockquote cite="– Unknown">
            Success is my mission, I grind with precision, no limits, no ceilings, I rise with ambition.
          </Blockquote>
        </div>

        <div className='spacing'></div>

        <Title color='rebeccapurple' size="45px">whoami</Title>
        <br />
        <Title size="h3" className="text">&emsp;&emsp;I am a software developer specialized
          in full-stack development, with a slight inclination towards front-end development.
          Currently, I am in the final year of my Bachelor's degree at <Link
            className="link" to="https://www.ips.pt/ips_si/web_page.inicial">IPS</Link>.
        </Title>
        <br />
        <Title size="h3" className="text">
          &emsp;&emsp;Throughout
          my academic journey, I have acquired a strong grasp of software development principles,
          algorithms, data structures, and programming languages. Engaging in practical projects
          has sharpened my ability to design and implement scalable, efficient software solutions.
        </Title>

        <div className='spacing'></div>

        <Title color='rebeccapurple' size="45px">Where am I from?</Title>
        <br />
        <div className='where-container'>
          <div className='text-container'>
            <Title size="h3" className="text">&emsp;&emsp;I hail from Sesimbra, a charming town in Portugal <StaticImage
              alt="Pt"
              src="../images/pt.png"
              width="30"
              height="30"
            />. Additionally, I work in the vibrant city of Lisbon and pursue my studies in Setúbal.
            </Title>
            <br />
            <Title size="h3" className="text">
              &emsp;&emsp;These diverse
              locations have provided me with unique experiences and perspectives, allowing me to engage with the
              thriving tech industry while immersing myself in a rich academic environment.
            </Title>
          </div>
          <div className='image-caption-container'>
            <StaticImage
              alt="Sesimbra"
              src="../images/sesimbra.jpg"
              width="450"
              height="290"
            />
            <Text>
              Sesimbra, Portugal
            </Text>
          </div>
        </div>

        <div className='spacing'></div>

        <Title color='rebeccapurple' size="45px">Timeline</Title>
        <br />
        <Title size="h3" className="text">
          &emsp;&emsp;This is a visual representation of my professional path so far.
        </Title>
        <br />
        <br />
        <div className='timeline-container'>
          <div className='timeline'>
            <Timeline active={2} bulletSize={24} lineWidth={4} reverseActive>

              <Timeline.Item title="&emsp;Let's talk!" lineVariant='dashed'>
                <Text color="dimmed" size="sm">The future holds many unexpected things like your visit to this website, now that you are
                  here, let's get in touch! Message me in one of my socials down below or <Link
                    className="link" to="/contact">send me a message</Link>!</Text>
                <Text size="xs" mt={4}>Now</Text>
              </Timeline.Item>

              <Timeline.Item title="&emsp;Build Up Labs">
                <Text color="dimmed" size="sm">Currently, I am undertaking an internship as a Full Stack Developer at Build Up Labs, where
                  I work with various technologies including Gatsby, Meteor, Next.js, Mantine, MongoDB, and various cloud services.</Text>
                <Text size="xs" mt={4}>2023 - Now</Text>
              </Timeline.Item>

              <Timeline.Item title="&emsp;Polytechnic Institute of Setúbal">
                <Text color="dimmed" size="sm">Throughout the past three years, I have dedicated myself to acquiring and refining
                  a wide range of skills that have contributed to my current position. These skills include valuable soft skills
                  like resilience, work ethic, and patience, as well as technical skills such as coding, debugging, testing, and
                  project management, among others.</Text>
                <Text size="xs" mt={4}>2020 - Now</Text>
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

        <br />
        <br />

      </Layout>
    </main>
  )
}


// Step 3: Export your component
export default AboutPage

export const Head = () => (
  <Seo title="About Me" />
)