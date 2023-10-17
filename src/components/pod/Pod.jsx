import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import '../pod/Pod.css';
import Pagination from '../pagination/Pagination';
import Trend from '../pod/Trend';
import PodCard from './PodCard';
import Footer from '../footer/Footer';

function Pod() {
  return (
    <div>
      <Container>
        <div className="trendBar">
          <Col xm={12} sm={12} md={12} lg={12}>
            <Trend />
          </Col>
        </div>

        <Row xm={6} sm={6} md={12} lg={12}>
          <Col xm={6} sm={6} md={3} lg={4} data-aos="fade-in">
            <PodCard />
          </Col>
          <Col xm={6} sm={6} md={3} lg={4} data-aos="fade-in">
            <PodCard />
          </Col>
          <Col xm={6} sm={6} md={3} lg={4} data-aos="fade-in">
            <PodCard />
          </Col>
          <Col xm={6} sm={6} md={3} lg={4} data-aos="fade-in">
            <PodCard />
          </Col>
          <Col xm={6} sm={6} md={3} lg={4} data-aos="fade-in">
            <PodCard />
          </Col>
          <Col xm={6} sm={6} md={3} lg={4} data-aos="fade-in">
            <PodCard />
          </Col>
          <Col xm={6} sm={6} md={3} lg={4} data-aos="fade-in">
            <PodCard />
          </Col>
          <Col xm={6} sm={6} md={3} lg={4} data-aos="fade-in">
            <PodCard />
          </Col>
          <Col xm={6} sm={6} md={3} lg={4} data-aos="fade-in">
            <PodCard />
          </Col>
        </Row>
      </Container>
      <div className="d-flex justify-content-center">
        <Pagination />
      </div>
      {<Footer />}
    </div>
  );
}

export default Pod;
