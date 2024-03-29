import React from 'react'

import { Helmet } from 'react-helmet'

import NavbarInteractive from '../components/navbar-interactive'
import CardForCatalog from '../components/card-for-catalog'
import './vetrico-catalog.css'

const VetricoCatalog1 = (props) => {
  return (
    <div className="vetrico-catalog1-container">
      <Helmet>
        <title>Vetrico</title>
        <meta property="og:title" content="Vetrico" />
      </Helmet>
      <div className="vetrico-catalog1-navbar">
        <NavbarInteractive rootClassName="navbar-interactive-root-class-name4"></NavbarInteractive>
      </div>
      <div className="vetrico-catalog1-container1">
        <span className="vetrico-catalog1-text">
          <span>Каталог</span>
          <br></br>
        </span>
      </div>
      <div className="vetrico-catalog1-container2">
        <div
          data-thq="slider"
          data-navigation="true"
          data-pagination="true"
          className="vetrico-catalog1-slider swiper"
        >
          <div data-thq="slider-wrapper" className="swiper-wrapper">
            <div
              data-thq="slider-slide"
              className="vetrico-catalog1-slider-slide swiper-slide"
            >
              <CardForCatalog rootClassName="card-for-catalog-root-class-name27"></CardForCatalog>
              <CardForCatalog rootClassName="card-for-catalog-root-class-name28"></CardForCatalog>
              <CardForCatalog rootClassName="card-for-catalog-root-class-name29"></CardForCatalog>
              <CardForCatalog rootClassName="card-for-catalog-root-class-name30"></CardForCatalog>
              <CardForCatalog rootClassName="card-for-catalog-root-class-name31"></CardForCatalog>
              <CardForCatalog rootClassName="card-for-catalog-root-class-name32"></CardForCatalog>
            </div>
            <div
              data-thq="slider-slide"
              className="vetrico-catalog1-slider-slide1 swiper-slide"
            >
              <CardForCatalog rootClassName="card-for-catalog-root-class-name33"></CardForCatalog>
              <CardForCatalog rootClassName="card-for-catalog-root-class-name34"></CardForCatalog>
              <CardForCatalog rootClassName="card-for-catalog-root-class-name35"></CardForCatalog>
              <CardForCatalog rootClassName="card-for-catalog-root-class-name36"></CardForCatalog>
              <CardForCatalog rootClassName="card-for-catalog-root-class-name37"></CardForCatalog>
              <CardForCatalog rootClassName="card-for-catalog-root-class-name38"></CardForCatalog>
            </div>
            <div
              data-thq="slider-slide"
              className="vetrico-catalog1-slider-slide2 swiper-slide"
            >
              <CardForCatalog rootClassName="card-for-catalog-root-class-name39"></CardForCatalog>
              <CardForCatalog rootClassName="card-for-catalog-root-class-name40"></CardForCatalog>
              <CardForCatalog rootClassName="card-for-catalog-root-class-name41"></CardForCatalog>
              <CardForCatalog rootClassName="card-for-catalog-root-class-name42"></CardForCatalog>
              <CardForCatalog rootClassName="card-for-catalog-root-class-name43"></CardForCatalog>
              <CardForCatalog rootClassName="card-for-catalog-root-class-name44"></CardForCatalog>
            </div>
            <div
              data-thq="slider-slide"
              className="vetrico-catalog1-slider-slide3 swiper-slide"
            >
              <CardForCatalog rootClassName="card-for-catalog-root-class-name45"></CardForCatalog>
              <CardForCatalog rootClassName="card-for-catalog-root-class-name46"></CardForCatalog>
              <CardForCatalog rootClassName="card-for-catalog-root-class-name47"></CardForCatalog>
              <CardForCatalog rootClassName="card-for-catalog-root-class-name48"></CardForCatalog>
              <CardForCatalog rootClassName="card-for-catalog-root-class-name49"></CardForCatalog>
              <CardForCatalog rootClassName="card-for-catalog-root-class-name50"></CardForCatalog>
            </div>
          </div>
          <div
            data-thq="slider-pagination"
            className="vetrico-catalog1-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
          >
            <div
              data-thq="slider-pagination-bullet"
              className="vetrico-catalog1-slider-pagination-bullet swiper-pagination-bullet swiper-pagination-bullet-active"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="vetrico-catalog1-slider-pagination-bullet1 swiper-pagination-bullet"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="vetrico-catalog1-slider-pagination-bullet2 swiper-pagination-bullet"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="vetrico-catalog1-slider-pagination-bullet3 swiper-pagination-bullet"
            ></div>
          </div>
          <div
            data-thq="slider-button-prev"
            className="vetrico-catalog1-slider-button-prev swiper-button-prev"
          ></div>
          <div
            data-thq="slider-button-next"
            className="vetrico-catalog1-slider-button-next swiper-button-next"
          ></div>
        </div>
      </div>
      <footer className="vetrico-catalog1-footer">
        <div className="vetrico-catalog1-separator"></div>
        <div className="vetrico-catalog1-container3">
          <span className="vetrico-catalog1-text3">
            © 2024 VETRICO, All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  )
}

export default VetricoCatalog1
