import React from 'react';
import './Product.css';
import { Row, Col, Container } from 'react-bootstrap';
import product_01 from '../../../assets/product_01.png';
import product_02 from '../../../assets/product_02.png';
import {ImQuotesLeft} from 'react-icons/im'

function Product() {
  return (
    <div className="product_brand">
      <Container>
        <Row  className="product_margin" xm={12} sm={12} md={12} lg={12} mb-3>
          <Col xm={12} sm={12} md={5}>
            <img className="product_img" src={product_01} alt="product_image" />
          </Col>
          <Col xm={12} sm={12} md={7}>
            <div className="product_text">
            <p className='qoute'><ImQuotesLeft/></p>
            Powering the most podcasts <div>worldwide...</div>
              </div>

             <h4 className='micro_text'>
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
             took a galley of type and scrambled it to make a type specimen book. It has survived not only
             five centuries, but also the leap into electronic typesetting, 
              </h4>
          </Col>
        </Row>
        {/* break */}

        <Row xm={12} sm={12} md={12} lg={12}>
          <Col xm={12} sm={12} md={7}>
          <div className="product_text">
            <p className='qoute'><ImQuotesLeft/></p>
            Live streaming <div>Colaboration...</div>
              </div>
              <h4 className='micro_text'>
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
             took a galley of type and scrambled it to make a type specimen book. It has survived not only
             five centuries, but also the leap into electronic typesetting, 
              </h4>
          </Col>
          <Col xm={12} sm={12} md={5}>
          <img className="product_img" src={product_02} alt="product_image" />
            </Col>
        </Row>


      </Container>
    </div>
  );
}

export default Product;
