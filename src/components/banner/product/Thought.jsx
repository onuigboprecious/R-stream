import React from 'react';
import { BsChatQuote } from 'react-icons/bs';
import thought from '../../../assets/thought.png';
import { Row, Col, Container } from 'react-bootstrap';
import './Product.css';

function Thought() {
  return (
    <div className="why_thought">
      <Container>
        <Row xm={12} sm={12} md={12} lg={12} mb-3>
          <Col xm={12} sm={12} md={7}>
            <div data-aos="fade-right">
              <img
                className="  product_img mx-auto d-block"
                src={thought}
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
                Interactive <div>Interface...</div>
              </div>
              <h4 className="micro_text">
                Engage and captivate your audience with our powerful features.
                Interact with viewers through live chat, polls, and Q&A
                sessions. Amplify your content with stunning graphics, overlays,
                and transitions.
              </h4>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Thought;
