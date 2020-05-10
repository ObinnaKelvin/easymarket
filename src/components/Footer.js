import React from 'react';
import {Jumbotron, Container, Col, Row} from 'react-bootstrap';
import "../styles/Footer.css";
import image1 from '../img/google-play-badge.png';

const iconDimension = {
  width: "150px",
  height: "50px",
  marginLeft: "-10px",
  marginTop: "0px"

}

function Footer() {
  return (
    <div>
      <Jumbotron className="jumbotron" fluid>
        <Container>
          <Row>
            <Col md="4">
            <p><strong><h2 className="sub-title">EasyMarket</h2></strong></p>
            <p className="main-text">EasyMarket is a free app that makes every selling on social media easy and rewarding.</p>
            </Col>
            <Col md="2">
              <ul>
                  <li className="list">
                    <strong><h7 className="title">GET APP</h7></strong>
                  </li>
                  <li className="list">
                    <img src={image1} style={iconDimension}  alt="google play badge"/>
                  </li>
              </ul>
            </Col>
            <Col md="2">
                <ul>
                  <li className="list">
                    <strong><h7 className="title">WAYS TO EARN</h7></strong>
                  </li>
                  <li className="list">
                    <a href="#!">In store</a>
                  </li>
                  <li className="list">
                    <a href="#!">Online shopping</a>
                  </li>
                  <li className="list">
                    <a href="#!">Pay with EasyMarket</a>
                  </li>
                  <li className="list">
                    <a href="#!">Invite friends</a>
                  </li>
                </ul>
            </Col>
            <Col md="2">
              <ul>
                <li className="list">
                  <strong><h7 className="title">ABOUT US</h7></strong>
                </li>
                <li className="list">
                  <a href="#!">How it works</a>
                </li>
                <li className="list">
                  <a href="#!">Help Center</a>
                </li>
                <li className="list">
                  <a href="#!">Company</a>
                </li>
                <li className="list">
                  <a href="#!">Careers</a>
                </li>
              </ul>
            </Col>
            <Col md="2">
              <ul className="list">
                <li className="list">
                  <strong><h7 className="title">PARTNER US</h7></strong>
                </li>
                <li>
                  <a href="#!">Brands</a>
                </li>
                <li>
                  <a href="#!">Retailers</a>
                </li>
                <li>
                  <a href="#!">Research</a>
                </li>
                <li>
                  <a href="#!">Press Inquiries</a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      
    </div>
  )
}

export default Footer

