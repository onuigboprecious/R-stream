import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { SideNav } from '../SideNav';
import SearchBar from '../../pod/SearchBar';
import TopicList from '../../pod/Topics';

const ReelsPage = () => {
  return (
    <div>
      <div className="row">
        <div >




          <Row>
            <Col lg={1} md={1}>
              <SideNav />
            </Col>


            <Col lg={12} md={12}>
              <div className="podcast-content justify-content-center">
                <div className="live_Hot mb-3 mt-0 py-2 px-3">
                  <div className="Trend_bar mt-auto ">
                    <TopicList />
                  </div>
                  <div className="Search_bar">
                    <SearchBar />
                  </div>
                </div>
                <Container>
                  <div className="trend-wrapper">



                

                  </div>
                </Container>
              </div>

            </Col>
          </Row>




        </div>
      </div>
    </div>
  )
}

export default ReelsPage