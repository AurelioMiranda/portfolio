import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from "../components/seo"
import { Accordion, Blockquote, Text, Title } from '@mantine/core';
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

        <Title color='rebeccapurple' size="45px">Experience</Title>
        <br />
        <Accordion radius="xs" defaultValue="customization">
          <Accordion.Item value="build-up-labs" className="text">
            <Accordion.Control className='accordion-text-title'>2023 - Now &emsp;&emsp;Build Up Labs</Accordion.Control>
            <Accordion.Panel className='accordion-text'>Currently, I am undertaking an internship as a Full Stack Developer at Build Up Labs, where
              I work with various technologies including Gatsby, Meteor, Next.js, Mantine, MongoDB, and various cloud services.</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="creative-ai" className="text">
            <Accordion.Control className='accordion-text-title'>2023 &emsp;&emsp;&emsp;&emsp;&emsp;ILL Creative AI</Accordion.Control>
            <Accordion.Panel>This year, I participated in an international project that brought together students from various
              parts of Europe, including Austria, Belarus, China, and, of course, Portugal. The primary objective of this
              project was to create a piece of art exclusively using AI. More information about this project can be found on
              the <Link className="link" to="/blog">portfolio</Link> section.</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="ips" className="text">
            <Accordion.Control className='accordion-text-title'>2020 - Now &emsp;&emsp;Polytechnic Institute of Setúbal</Accordion.Control>
            <Accordion.Panel>Configure components appearance and behavior with vast amount of settings or overwrite any part of component styles</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="sampaio" className="text">
            <Accordion.Control className='accordion-text-title'>2017 - 2020 &emsp;&emsp;Secondary School of Sampaio</Accordion.Control>
            <Accordion.Panel>With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard</Accordion.Panel>
          </Accordion.Item>
        </Accordion>

        <div className='spacing'></div>

      </Layout>
    </main>
  )
}


// Step 3: Export your component
export default AboutPage

export const Head = () => (
  <Seo title="About Me" />
)