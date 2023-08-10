import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Action from './action_tab';
import { Row, Col, Container, Image } from 'react-bootstrap';
import oblack from '../../assets/oblack.jpeg';
import { FcApproval } from 'react-icons/fc';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';

function Trend() {
  return (
    <div className="trend_card_slider auto py-4">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className="pod_slide">
          <Container>
            <Row xm={12} sm={12} lg={12}>
              <Col xm={4} sm={4} md={4} lg={4}>
                <Image src={oblack} className="pod_slide_image" />
              </Col>
              <Col xm={8} sm={8} md={8} lg={8}>
                <section className="artist_card">
                  <div className="artist_qoute">
                    {' '}
                    <ImQuotesLeft />
                  </div>
                  <div className="artist_name">
                    OdumuduBlvck {} <FcApproval />
                  </div>
                  <div className="podcast_title">
                    Declan RIce <ImQuotesRight />
                  </div>
                </section>
              </Col>
            </Row>
          </Container>
          <Action />
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
