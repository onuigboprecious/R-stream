import React from 'react';
import './Banner.css';

import { Container, Row, Col, Carousel, Button, } from 'react-bootstrap';
// import {BsFillArrowRightSquareFill} from 'react-icons/bs'



import banner_03 from '../../assets/banner_03.png';
import banner_04 from '../../assets/banner_04.png';
import banner_05 from '../../assets/banner_05.png';
import Product from '../banner/product/Product'
import Thought from '../banner/thought/Thought';

const Banner = () => {
  return (
    <div className="land_banner">
      <Container>
        <Row xm={12} sm={12} md={12} lg={12}>
          <Col xm={12} sm={12} md={6}>
            <div className="banner_layout">
              <div className="banner_intro">Say it all with Refinipee!</div>

              <div className="banner_text">
                <div
                  className="typewrite"
                  data-period="4000"
                  data-type='["Free podcasting platform", "Unlimited Streaming", "Enjoy freedom of speech."]'
                >
                  <span className="wrap"></span>
                </div>
              </div>

              <Button variant="light" to="/" className="btn_more" type="submit">
                Learn More ...
              </Button>
            </div>
          </Col>

          <Col xm={12} sm={12} md={6}>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={banner_03}
                  alt="Third slide"
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={banner_04}
                  alt="Second slide"
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={banner_05}
                  alt="Second slide"
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
      <Product />
      <Thought />
    </div>
  );
};

export default Banner;
