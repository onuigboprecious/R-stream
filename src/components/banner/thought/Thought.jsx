import React from 'react';
import './Thought.css';
import {BsChatQuote} from 'react-icons/bs'
import thought from '../../../assets/thought.png';
import { Row, Col, Container } from 'react-bootstrap';

function Thought() {
  return (
    <div className="why_thought">
        <Container>
      <Row xm={12} sm={12} md={12} lg={12} mb-3>
        <Col xm={12} sm={12} md={7}>
        <img className="  product_img mx-auto d-block" src={thought} alt="product_image" />
        </Col>
        <Col xm={12} sm={12} md={5}>
        <div className="product_text">
            <p className='qoute'><BsChatQuote/></p>
            Live streaming <div>Colaboration...</div>
              </div>
              <h4 className='micro_text'>
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
             took a galley of type and scrambled it to make a type specimen book. It has survived not only
             five centuries, but also the leap into electronic typesetting, 
              </h4>
        </Col>
      </Row>
      </Container>
    </div>
  );
}

export default Thought;
