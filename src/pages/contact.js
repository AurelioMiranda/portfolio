import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from "../components/seo"
import { Button, Textarea, Autocomplete, Title } from '@mantine/core';
import { Input } from '@mantine/core';
import { IconAt, IconAlertTriangle, IconWriting } from '@tabler/icons-react';
import '../styles/index.css'
import '../styles/contact.css'

const ContactMePage = () => {

  return (
    <main>
      <Layout pageTitle="Aurélio Miranda">

        <br />
        <br />
        <br />

        <Title color='rebeccapurple' size="45px">Contact me via the form below!</Title>
        <br />
        <br />

        <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact" className='form-container'>
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />

          <Input
            type="email"
            name="email"
            id="email"
            icon={<IconAt />}
            placeholder="Your email"
            size="md"
            className='input'
          />

          <Autocomplete
            type="text"
            name="subject"
            id="subject"
            icon={<IconAlertTriangle />}
            placeholder="Subject"
            data={['Work Opportunity', 'Business', 'Question', 'Rating']}
            size="md"
            className='input'
          />

          <Textarea
            type="message"
            id="message"
            icon={<IconWriting />}
            placeholder="Your message"
            withAsterisk
            size="md"
            className='input'
          />

          <button type="submit">Send</button>
        </form>
        <br />
        <br />
      </Layout>
    </main>
  )
}

export default ContactMePage

export const Head = () => (
  <Seo />
)