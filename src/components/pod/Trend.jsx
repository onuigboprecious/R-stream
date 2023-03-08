import layout from '../../assets/layout.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from 'react-bootstrap/Card';
// Import Swiper styles
import 'swiper/css';

function Trend() {
  return (
    <div className="trend_card_slider">
      <p>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
            {/* only one swiperslider card will be in use,   */}
          <SwiperSlide>
            <Card className="ii">
              <Card.Img src={layout} height={250} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>CARD ONE</Card.Title>
              </Card.ImgOverlay>
            </Card>
          </SwiperSlide>
          {/* end of valid swiperslider card  */}

          <SwiperSlide>
          <Card className="ii">
              <Card.Img src={layout} height={250} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>CARD TWO</Card.Title>
              </Card.ImgOverlay>
            </Card>
          </SwiperSlide>
          
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
        </Swiper>
      </p>
    </div>
  );
}

export default Trend;
