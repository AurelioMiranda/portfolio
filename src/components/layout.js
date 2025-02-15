import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { MantineProvider, Burger, Transition, Paper, Flex, Image } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useEffect } from 'react';
import {
  container,
  ul_style,
  text_title,
  text_style,
  burger_menu,
  text_style_title
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const [opened, { toggle, close }] = useDisclosure(true);
  const label = opened ? 'Close navigation' : 'Open navigation';

  useEffect(() => {
    if (window.innerWidth < 768) {
      close();
    }
  }, []);


  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: 'dark',
        colors: {
          deepBlue: ['#E9EDFC', '#C1CCF6', '#99ABF0'],
          blue: ['#E9EDFC', '#C1CCF6', '#99ABF0'],
        },

        shadows: {
          md: '1px 1px 3px rgba(0, 0, 0, .25)',
          xl: '5px 5px 3px rgba(0, 0, 0, .25)',
        },

        headings: {
          fontFamily: 'Roboto, sans-serif',
          sizes: {
            h1: { fontSize: '2rem' },
          },
        },
        components: {
          Badge: {
            styles: {
              root: { borderWidth: '0.125rem' },
            },
          },
        }
      }}
    >
      <div>
        <nav>
          <Flex justify="space-between" align="center">
            <Link className={text_style_title} to="/">
              <span className={text_title}>{data.site.siteMetadata.title.split(' ')[0]}.</span>
            </Link>

            <Paper radius="xl" p="xs" withBorder className={burger_menu}>
              <Burger opened={opened} size="md"
                onClick={toggle} aria-label={label} />
            </Paper>
          </Flex>
          <Flex align="flex-end" direction="column">
            <Transition mounted={opened} transition="slide-left" duration={200} timingFunction="ease">
              {(styles) => <div style={styles}>
                <ul className={ul_style} style={{ display: opened ? "block" : "none" }}>
                  <li>
                    <Link className={text_style} to="/">
                      Home
                    </Link></li>
                  <li>
                    <Link className={text_style} to="/about">
                      About
                    </Link></li>
                  <li>
                    <Link className={text_style} to="/portfolio">
                      Portfolio
                    </Link></li>
                  <li>
                    <Link className={text_style} to="/contact">
                      Contact Me
                    </Link></li>
                </ul>
              </div>}
            </Transition>
          </Flex>
        </nav>
        <br />
        <br />
        <br />
        <main className={container}>
          {children}
        </main>
      </div>
      <br />
      <br />
      <footer>
        <p>
          &copy; 2023 Aurélio Miranda. All rights reserved.
        </p>
        <div>
          <a href="https://www.instagram.com/l_aurelio_l/" target="_blank" rel="noopener noreferrer">
            <Image maw={240} width="25" height="25"
              src="https://www.iconpacks.net/icons/2/free-instagram-logo-icon-3497-thumb.png"
              alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/in/mirandex/" target="_blank" rel="noopener noreferrer">
            <Image maw={240} width="25" height="25"
              src="https://cdn-icons-png.flaticon.com/512/61/61109.png"
              alt="LinkedIn" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100008999912309" target="_blank" rel="noopener noreferrer">
            <Image maw={240} width="25" height="25"
              src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Facebook%2BIcon%2BBlack.png"
              alt="Facebook" />
          </a>
          <a href="mailto:aureliogaboleiro49@gmail.com">
            <Image maw={240} width="25" height="auto"
              src="https://www.pngmart.com/files/15/Email-Symbol-PNG-Transparent.png"
              alt="Email" />
          </a>
        </div>
      </footer>
    </MantineProvider>
  )
}

export default Layout