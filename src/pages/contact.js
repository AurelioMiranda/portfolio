import * as React from 'react';
import Layout from '../components/layout';
import Seo from "../components/seo";
import { Button, Textarea, Autocomplete, Title } from '@mantine/core';
import { Input } from '@mantine/core';
import { IconAt, IconAlertTriangle, IconWriting } from '@tabler/icons-react';
import '../styles/index.css'
import '../styles/contact.css'

const ContactMePage = () => {

  return (
    <main>
      <Layout pageTitle="Aurélio Miranda">
        <div className="contact-header">
          <Title color="rebeccapurple" size="45px">Contact Me</Title>
          <p className="contact-subtitle">I'd love to hear from you! Please fill out the form below to get in touch.</p>
        </div>

        <br />

        <Title color='rebeccapurple' size="45px">Contact me via the form below!</Title>

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
            name="message"
            id="message"
            icon={<IconWriting />}
            placeholder="Your message"
            withAsterisk
            size="md"
            className='input'
          />

          <Button variant="default" type='submit'>
            Send
          </Button>
        </form>

        <div className="linkedin-cta">
          <p>If you want a faster response, feel free to message me on <a href="https://www.linkedin.com/in/mirandex/" target="_blank" rel="noopener noreferrer">LinkedIn</a>!</p>
        </div>
      </Layout>
    </main>
  )
}

export default ContactMePage

export const Head = () => (
  <Seo />
)