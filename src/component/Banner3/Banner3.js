import React from 'react'
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import bookMockup1 from "../../assets/bookbanner.png";
import Heading from "../../assets/heading.png";
import "./style.css";





const Banner3 = () => {
  return (
    <div id='banners'>
        <div className="shadowDown">
          <div className='container-fluid'>
            <Row>
              <Col lg={7} sm={12} md={8} className='mt-5 pt-2' id="mainContext">

            <img src={Heading} id="imageBanner" className="mt-5 mx-0 " style={{ width: '85%' }} alt="mockup" />
            </Col>
            <Col lg={5} sm={12} className='mt-lg-5'>
                <div className="text-center">
                  <img src={bookMockup1} id="bookMockup1" className="" alt="mockup" />
                </div>
              </Col>
                </Row>
                </div>
                </div>
                </div>

  )
}

export default Banner3
