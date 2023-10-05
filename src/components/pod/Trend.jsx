import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Action from './action_tab';
import Player from './player';
import { Row, Col, Container, Image } from 'react-bootstrap';
import oblack from '../../assets/oblack.jpeg';
import { FcApproval } from 'react-icons/fc';


function Trend() {
  return (
    <div className="trend_card_slider auto py-4">
      <div className="trend_Hot mb-3 py-1 px-2">Trending Today</div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className="pod_slide">
          <Container>
            <Row xm={12} sm={12} lg={12}>
              <Col xm={12} sm={12} md={4} lg={4}>
                <Image
                  src={oblack}
                  className="pod_slide_image mx-auto d-block "
              
                />
              </Col>

              <Col xm={12} sm={12} md={8} lg={8}>
                <section className="artist_card">
                  <div className="artist_name">
                    OdumuduBlvck {} <FcApproval />
                  </div>
                  <div className="podcast_time">streamed time 20hrs</div>
                </section>
                <Player />
              </Col>
            </Row>
            <div className="media_player d-flex justify-content-center">
              <Action />
            </div>
          </Container>
        </SwiperSlide>

        <SwiperSlide className="pod_slide">Slide 4</SwiperSlide>
        <SwiperSlide className="pod_slide">Slide 5</SwiperSlide>
        <SwiperSlide className="pod_slide">Slide 6</SwiperSlide>
        <SwiperSlide className="pod_slide">Slide 7</SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Trend;
