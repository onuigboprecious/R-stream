/* eslint-disable jsx-a11y/anchor-is-valid */
import '../live/Live.css';
import { Container, Row, Col } from 'react-bootstrap';
import { BsBookmark } from "react-icons/bs";
import React from 'react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { SideNav } from './SideNav';
import SearchBar from '../pod/SearchBar';
import TopicList from '../pod/Topics';
import { NavLink } from 'react-router-dom';
// import YouTube from 'react-youtube';


function Stream() {
  // const videoId = 'your-youtube-video-id';
  return (
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
            <div className="Search_bar" >
              <SearchBar />
            </div>
          </div>

          <Container>
            <div data-aos="fade-in">
              <div className='Stream_layout   '>
                <div className="intro_greet">
                  <span>Good evening</span>
                </div>

                <Row>
                  <Col md={9}>
                    <div className='stream_panel'>
                    
                        {/* <YouTube videoId={videoId} className="youtube-video" />  */}
                 
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className='stream_list'>
                      <div className='title_bar'>
                        <div className='title_name'>live Stream playlist</div>
                        <div className='title_metadata'>metadata</div>
                        <div className='title_icons'>
                          <span><BsBookmark /></span>
                          <span><BsBookmark /></span>
                          <span><BsBookmark /></span>
                        </div>
                      </div>
                      <div className='active_list'>
                        <div className='live_list'>
                          <span>hello world</span>



                          <div>
                            <ul>
                              <NavLink to="/Stream" className="link" >

                                <span> Stream</span>
                              </NavLink>
                            </ul>
                            <ul>
                              <NavLink to="/LivePage" className="link" >

                                <span> Live</span>
                              </NavLink>
                            </ul>
                            <ul>

                              <NavLink to="/Reels" className="link" >

                                <span> Reels</span>
                              </NavLink>
                            </ul>
                            <ul>
                              <NavLink to="/Circle" className="link" >

                                <span> My Circle</span>
                              </NavLink>
                            </ul>
                            <ul>
                              <NavLink to="/History" className="link" >

                                <span> History</span>
                              </NavLink>
                            </ul>
                            <ul>
                              <NavLink to="/Bookmarked" className="link" >

                                <span> Bookmarks</span>
                              </NavLink>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Container>
        </div>

      </Col>
    </Row>




  );
}

export default Stream;





