import React from 'react'

import { Helmet } from 'react-helmet'

import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Page - Fancy Monthly Fish</title>
        <meta property="og:title" content="Page - Fancy Monthly Fish" />
      </Helmet>
      <div className="page-container1">
        <button className="button">Button</button>
        <div className="page-container2"></div>
      </div>
    </div>
  )
}

export default Page
