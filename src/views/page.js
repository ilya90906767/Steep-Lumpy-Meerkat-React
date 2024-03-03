import React from 'react'

import { Helmet } from 'react-helmet'

import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Page - Steep Lumpy Meerkat</title>
        <meta property="og:title" content="Page - Steep Lumpy Meerkat" />
      </Helmet>
      <ul className="page-ul list">
        <li className="list-item">
          <span>Text</span>
        </li>
        <li className="list-item"></li>
        <li className="list-item">
          <span>Text</span>
        </li>
      </ul>
      <span>Text</span>
    </div>
  )
}

export default Page
