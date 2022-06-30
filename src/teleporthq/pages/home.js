import React from 'react'

import { Helmet } from 'react-helmet'

import Component1 from '../components/component1'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Fancy Monthly Fish</title>
        <meta property="og:title" content="Fancy Monthly Fish" />
      </Helmet>
      <h1> heading5</h1>
      <Component1 rootClassName="component1-root-class-name2">
        <button className="button">Button</button>
      </Component1>
    </div>
  )
}

export default Home
