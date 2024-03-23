import  React  from 'react';
import '../pod/Pod.css';
import { Col, Row, Image, Button } from 'react-bootstrap';
import Couple from '../../assets/Couple.png';
import { IoPlaySharp } from 'react-icons/io5';

function PodCard() {


  return (
    <div className="pod_panels">
      <Row xs={12} sm={12} md={12} lg={12}>
        <Col xs={12} sm={12} md={7} lg={7}>
          {' '}
          <div className="file_image">
            <Image src={Couple} className="file_image"></Image>
          </div>{' '}
        </Col>
        <Col xs={12} sm={12} md={5} lg={5}>
          {' '}
          <div className="artist_container">
            <div className="artist_name">John Doe</div>
            <div className="data_title">How to understand the matrix</div>
            <Button variant="transperent" className="file_play">
              <IoPlaySharp />{' '}
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default PodCard;
