import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import {
  container,
  ul_style,
  text_style,
  heading
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

  return (
    <div>
      <nav>
        <span className={text_style}>{data.site.siteMetadata.title.split(' ')[0]}.</span>
        <ul className={ul_style}>
          <li>
            <Link className={text_style} to="/">
              Home
            </Link></li>
          <li>
            <Link className={text_style} to="/about">
              About
            </Link></li>
          <li>
            <Link className={text_style} to="/blog">
              Blog
            </Link></li>
        </ul>
      </nav>
      <main className={container}>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout