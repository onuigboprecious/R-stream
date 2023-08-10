import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import '../pod/Pod.css';
import Pagination from '../pagination/Pagination';
import Trend from '../pod/Trend';
import PodCard from './PodCard';

function Pod() {
  return (
    <Container>
      <div className="trendBar">
        <Col xm={12} sm={12} md={12} lg={12}>
          <Trend />
          
        </Col>
      </div>

      <Row xm={12} sm={12} md={12} lg={12}>
        <Col xm={12} sm={12} md={2} lg={4}>
          <PodCard />
        </Col>
        <Col xm={12} sm={12} md={2} lg={4}>
          <PodCard />
        </Col>
        <Col xm={12} sm={12} md={2} lg={4}>
          <PodCard />
        </Col>
        <Col xm={12} sm={12} md={2} lg={4}>
          <PodCard />
        </Col>
        <Col xm={12} sm={12} md={2} lg={4}>
          <PodCard />
        </Col>
        <Col xm={12} sm={12} md={2} lg={4}>
          <PodCard />
        </Col>

        <div className=" d-flex justify-content-center">
          <Pagination />
        </div>
      </Row>
    </Container>
  );
}

export default Pod;
