import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import { BsFillShareFill } from 'react-icons/bs';
import { IoMdAdd } from 'react-icons/io';
import { AiFillHeart } from 'react-icons/ai';
import { FaCloudDownloadAlt } from 'react-icons/fa';
import { BsFillBookmarkCheckFill } from 'react-icons/bs';

function Action() {
  return (
    <Container className="d-flex justify-content-center action_tab_container">
      <Row>
        <Col xm={6} sm={6} md={12}>
            <div className="action_tab">
              <div className="action_button">
                {' '}
                <BsFillBookmarkCheckFill />
              </div>
              <div className="action_button">
                {' '}
                <IoMdAdd />{' '}
              </div>
              <div className="action_button">
                {' '}
                <AiFillHeart />{' '}
              </div>
              <div className="action_button">
                {' '}
                <FaCloudDownloadAlt />{' '}
              </div>
              <div className="action_button">
                {' '}
                <BsFillShareFill />{' '}
              </div>
            </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Action