import React from 'react';
import './Banner.css';
import { Container, Row, Col, Carousel, Button } from 'react-bootstrap';
import product_02 from '../../assets/product_02.png';
import Connected from '../../assets/Connected.gif';
import { BsChatQuote } from 'react-icons/bs';
import thought from '../../assets/thought.png';
// images and webpage imports
import banner_03 from '../../assets/banner_03.png';
import banner_04 from '../../assets/banner_04.png';
import banner_05 from '../../assets/banner_05.png';
import Footer from '../footer/Footer';
import NavHead from '../navbar/Navbar';


const Banner = () => {
  
  return (
    <div className="land_banner">
      <Container>
         <NavHead />
        <Row xm={12} sm={12} md={12} lg={12}>
          <Col xm={12} sm={12} md={6}>
            <div data-aos="fade-right">
              <div className="banner_layout mb-5">
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
                  href="#products"
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
                    src={banner_03}
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
     
      {/* products */}
      <div className="product_brand" id="products">
        <Container>
          <Row className="product_margin" xm={12} sm={12} md={12} lg={12}>
            <Col xm={12} sm={12} md={7}>
              <div data-aos="fade-right">
                <img
                  className="product_img mx-auto d-block"
                  src={Connected}
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
                  platform offers an array of powerful tools and features
                  designed to streamline your podcasting journey. From seamless
                  hosting to advanced analytics, we've got you covered.
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

      {/* thoughts */}
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
                  sessions. Amplify your content with stunning graphics,
                  overlays, and transitions.
                </h4>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
       
      <Footer />
      
       
    </div>
  );
};

export default Banner;
