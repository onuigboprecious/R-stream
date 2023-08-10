import React from 'react';
import './Banner.css';
import { Container, Row, Col, Carousel, Button } from 'react-bootstrap';
// -----------------------------------------------
// import banner_03 from '../../assets/banner_03.png';
import global from '../../assets/global.png';
import banner_04 from '../../assets/banner_04.png';
import banner_05 from '../../assets/banner_05.png';
import Product from '../banner/product/Product';
import Thought from './product/Thought';
import Footer from '../footer/Footer';

const Banner = () => {
  return (
    <div className="land_banner">
      <Container>
        <Row xm={12} sm={12} md={12} lg={12}>
          <Col xm={12} sm={12} md={6}>
            <div data-aos="fade-right">
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

                <Button
                  variant="light"
                  to="/"
                  className="btn_more"
                  type="submit"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </Col>

          <Col xm={12} sm={12} md={6}>
          <div data-aos="fade-left">
            <Carousel fade>
              <Carousel.Item interval={7000}>
                <img
                  className="d-block w-100"
                  src={global}
                  alt="Third slide"
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item interval={7000}>
                <img
                  className="d-block w-100"
                  src={banner_04}
                  alt="Second slide"
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item interval={7000}>
                <img
                  className="d-block w-100"
                  src={banner_05}
                  alt="Second slide"
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <Product />
      <Thought />
      <Footer />
    </div>
  );
};

export default Banner;
