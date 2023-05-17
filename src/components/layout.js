import * as React from 'react'
import { Link } from 'gatsby'
import { 
  container, 
  text_style,
  heading
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <nav>
        <span className={text_style}>Aurélio.</span>
        <ul>
          <li><Link className={text_style} to="/">Home</Link></li>
          <li><Link className={text_style} to="/about">About</Link></li>
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