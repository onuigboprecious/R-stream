import React from 'react';
import {
  BsFillXDiamondFill,
  BsBookmarkHeart,
  BsXDiamondFill,
  BsBezier2,
  BsBook,
  BsBriefcaseFill,
} from 'react-icons/bs';
import { Nav, Row, Col, } from 'react-bootstrap';
import '../pod/Pod.css';
import Pagination from '../pagination/Pagination';
import Trend from '../pod/Trend';
import PodCard from './PodCard';

function Pod() {
  return (
    <Row xm={12} sm={12} md={12} lg={12}>
      <Col xm={12} sm={12} md={2} lg={2}>
        <div className="sidebar" id="navbar-toggle">
          <div className="sidebar-menu">
            <Nav.Item className="pod_list">
              <Nav.Link className="socials" href="/live">
                <BsFillXDiamondFill /> Trending
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="pod_list">
              <Nav.Link className="socials" href="/live">
                <BsBookmarkHeart /> Your Libary
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="pod_list">
              <Nav.Link className="socials" href="/live">
                <BsXDiamondFill /> Favorite
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="pod_list">
              <Nav.Link className="socials" href="/live">
                <BsBezier2 /> Following
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="pod_list">
              <Nav.Link className="socials" href="/">
                <BsBook /> series
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="pod_list">
              <Nav.Link className="socials" href="/">
                <BsBriefcaseFill /> Saved
              </Nav.Link>
            </Nav.Item>
          </div>
          </div>
        </Col>
      <Col xm={12} sm={12} md={8} lg={8}>
          <div className="display_page">
            <div className="trendBar">
              <Trend />
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


            <div className=" d-flex justify-content-end">
            <Pagination />
            </div>
             </Row>
          </div>
        </Col>
    </Row>
  );
}

export default Pod;
