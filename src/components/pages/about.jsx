import { Container, Row, Col, } from 'react-bootstrap';
import './page_style.css'

const About = () => {
  return (
    <div className="About_page">
      <Container>
        <Row xm={12} sm={12} md={12} lg={12}>
          <Col xm={12} sm={12} md={4}>
            <div className="about_background">
                <div className='panel '>
                    hello
                </div>
                </div>
          </Col>
          <Col xm={12} sm={12} md={8}>
            <div className='about_text'>
                The about text
                </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
