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
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting,
            </h4>
            </div>
          </Col>
        </Row><br/>
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
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting,
            </h4>
            </div>
          </Col>
          <Col xm={12} sm={12} md={7}>
          <div data-aos="fade-left">
            <img
              className="product_img mx-auto d-block"
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
