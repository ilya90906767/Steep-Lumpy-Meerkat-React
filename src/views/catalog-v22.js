import React from 'react'

import { Helmet } from 'react-helmet'

import NavbarInteractive from '../components/navbar-interactive'
import CardForCatalog from '../components/card-for-catalog'
import './catalog-v22.css'

const CatalogV22 = (props) => {
  return (
    <div className="catalog-v22-container">
      <Helmet>
        <title>Vetrico</title>
        <meta property="og:title" content="Vetrico" />
      </Helmet>
      <div className="catalog-v22-navbar">
        <NavbarInteractive rootClassName="navbar-interactive-root-class-name3"></NavbarInteractive>
      </div>
      <div className="catalog-v22-container1">
        <span className="catalog-v22-text">
          <span>Каталог</span>
          <br></br>
        </span>
      </div>
      <div className="catalog-v22-container2">
        <CardForCatalog rootClassName="card-for-catalog-root-class-name"></CardForCatalog>
        <CardForCatalog rootClassName="card-for-catalog-root-class-name1"></CardForCatalog>
        <CardForCatalog rootClassName="card-for-catalog-root-class-name2"></CardForCatalog>
        <CardForCatalog rootClassName="card-for-catalog-root-class-name3"></CardForCatalog>
        <CardForCatalog rootClassName="card-for-catalog-root-class-name4"></CardForCatalog>
        <CardForCatalog rootClassName="card-for-catalog-root-class-name5"></CardForCatalog>
      </div>
      <div className="catalog-v22-container3">
        <div className="catalog-v22-container4">
          <button type="button" className="catalog-v22-button button">
            <span className="catalog-v22-text3">--&gt;</span>
          </button>
        </div>
        <div className="catalog-v22-container5">
          <button type="button" className="catalog-v22-button1 button">
            <span className="catalog-v22-text4">&lt;--</span>
          </button>
        </div>
        <div className="catalog-v22-container6"></div>
      </div>
      <div className="catalog-v22-footer">
        <footer className="catalog-v22-footer1">
          <div className="catalog-v22-separator"></div>
          <div className="catalog-v22-container7">
            <span className="catalog-v22-text5">
              © 2024 VETRICO, All Rights Reserved.
            </span>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default CatalogV22
