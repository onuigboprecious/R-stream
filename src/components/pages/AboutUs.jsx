import { Container, Row, Col } from 'react-bootstrap';
import './page_style.css';
import Footer from '../footer/Footer.jsx';

const AboutUs = () => {
  return (
    <div className="About_container">
      <Container>
       <Row xm={12} sm={12} md={12} lg={12}>
          <Col xm={12} sm={12} md={4}>
           
          </Col>
          <Col xm={12} sm={12} md={8}>
           
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default AboutUs;
