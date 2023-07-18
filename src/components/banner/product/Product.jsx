import React from 'react';
import './Product.css';
import { Row, Col, Container } from 'react-bootstrap';
import product_01 from '../../../assets/product_01.png';
import product_02 from '../../../assets/product_02.png';
import { BsChatQuote } from 'react-icons/bs';

function Product() {
  return (
    <div className="product_brand">
      <Container>
        <Row className="product_margin" xm={12} sm={12} md={12} lg={12}>
          <Col xm={12} sm={12} md={7}>
            <div data-aos="fade-right">
              <img
                className="product_img mx-auto d-block"
                src={product_01}
                alt="product_image"
              />
            </div>
          </Col>
          <Col xm={12} sm={12} md={5}>
            <div data-aos="fade-left">
              <div className="product_text">
                <p className="qoute">
                  <BsChatQuote />
                </p>
                Powering the most podcasts <div>worldwide...</div>
              </div>

              <h4 className="micro_text">
                Why settle for mediocrity when you can be at the top? Our
                platform offers an array of powerful tools and features designed
                to streamline your podcasting journey. From seamless hosting to
                advanced analytics, we've got you covered.
              </h4>
            </div>
          </Col>
        </Row>
        {/* break */}

        <Row xm={12} sm={12} md={12} lg={12}>
          <Col xm={12} sm={12} md={5}>
            <div data-aos="fade-right">
              <div className="product_text">
                <p className="qoute">
                  <BsChatQuote />
                </p>
                Live streaming <div>Colaboration...</div>
              </div>
              <h4 className="micro_text">
                Experience seamless collaboration like never before. With
                LiveStreamCo, you can connect with colleagues, partners, or
                friends from anywhere in the world. Share your screen, host
                panel discussions, conduct live interviews, and brainstorm
                together in real time. Our platform supports multiple
                participants, ensuring everyone's voice is heard.
              </h4>
            </div>
          </Col>
          <br />
          <Col xm={12} sm={12} md={7} mt-3>
            <div data-aos="fade-left">
              <img
                className="product_img product_img_2 mx-auto d-block"
                src={product_02}
                alt="product_image"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Product;
