import '../live/Live.css';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { BsFillShareFill } from 'react-icons/bs';
import { IoMdAdd } from 'react-icons/io';
import { AiFillHeart } from 'react-icons/ai';
import { FaCloudDownloadAlt } from 'react-icons/fa';
import { BsFillBookmarkCheckFill } from 'react-icons/bs';
import { FiExternalLink } from 'react-icons/fi';
import React from 'react';
// import { useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
// import { Thumbs } from 'swiper';

function Live() {
  return (
    <Container>
      <Row xm={12} sm={12} md={12} lg={12}>
        <Col xm={12} sm={12} md={3}>
        <div data-aos="fade-right">
          <div id="left_view" className="sidebar">
            <div className="trend_live">
              <p>Trending Live</p>
              <Button href="/#" className="trend_1">
                {' '}
                Abuja Men <FiExternalLink />{' '}
              </Button>
              <Button href="/#" className="trend_1">
                {' '}
                Elon Musk's interview <FiExternalLink />{' '}
              </Button>
              <Button href="/#" className="trend_1">
                {' '}
                CBN_Nigeria <FiExternalLink />{' '}
              </Button>
              <Button href="/#" className="trend_1">
                {' '}
                Nolloyworrd <FiExternalLink />{' '}
              </Button>
              <Button href="/#" className="trend_1">
                {' '}
                Peter Obi <FiExternalLink />{' '}
              </Button>
            </div>
          </div>


          <div id="left_view" className="sidebar">
            <div className="trend_live">
              <p>Suggested Live</p>
              <Button href="#" className="trend_1">
                {' '}
                Tvc News <FiExternalLink />{' '}
              </Button>
              <Button href="#" className="trend_1">
                {' '}
                Elon Musk's interview <FiExternalLink />{' '}
              </Button>
              <Button href="#" className="trend_1">
                {' '}
                CBN_Nigeria <FiExternalLink />{' '}
              </Button>
              <Button href="#" className="trend_1">
                {' '}
                International Womens Day <FiExternalLink />{' '}
              </Button>
              <Button href="#" className="trend_1">
                {' '}
                Nation's Cup <FiExternalLink />{' '}
              </Button>
            </div>
          </div>
          </div>
        </Col>
        <Col xm={12} sm={12} md={8}>
          <div className="steam_View">
            <>
              <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                ...
              </Swiper>
            </>
            </div>
            </Col>
            <Col xm={12} sm={12} md={1}>
            <div data-aos="fade-left">
            <div className="media_bar">
              <div className="media_button">
                {' '}
                <BsFillBookmarkCheckFill />
              </div>
              <div className="media_button">
                {' '}
                <IoMdAdd />{' '}
              </div>
              <div className="media_button">
                {' '}
                <AiFillHeart />{' '}
              </div>
              <div className="media_button">
                {' '}
                <FaCloudDownloadAlt />{' '}
              </div>
              <div className="media_button">
                {' '}
                <BsFillShareFill />{' '}
              </div>
            </div>
            </div>
            </Col>
      </Row>
    </Container>
  );
}

export default Live;
