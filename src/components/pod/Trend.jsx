import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Action from './action_tab';
import AudioPlayer from './media/AudioPlayer';
import SearchBar from './SearchBar';
import { Row, Col, Container } from 'react-bootstrap';
import TopicList from './Topics';
import Trans from './Trans';
function Trend() {
  return (
    <div className="trend_card_slider auto py-4">
      <div
        xm={12}
        sm={12}
        md={12}
        lg={12}
        className="trend_Hot mb-3 mt-auto py-3 px-3"
      >
        <div className="Trend_bar mt-auto ">
          <TopicList />{' '}
        </div>
        <div className="Search_bar">
          <SearchBar />
        </div>
      </div>

      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide
          className="pod_slide d-flex justify-content-center"
        >
          <Container>
            <Row>
              <Col xm={12} sm={12} md={8} lg={8}>
                <AudioPlayer />
              </Col>

              <Col xm={12} sm={12} md={4} lg={4}>
                <div className="media_player d-flex justify-content-center">
                  <Trans />
                  <Action />
                </div>
              </Col>
            </Row>
          </Container>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Trend;
