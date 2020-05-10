import React from 'react';
import {Jumbotron, Container, Row, Col} from 'react-bootstrap';
import image1 from '../img/security1.svg';
import image2 from '../img/security2.svg';
import image3 from '../img/process.svg';
import image4 from '../img/hacker.svg';
import image5 from '../img/docs.svg';
import image6 from '../img/process.svg';
import image7 from '../img/mobileapp.svg';
import image8 from '../img/mobileapp2.svg';
import image9 from '../img/solution.svg';
import image10 from '../img/joy.svg';
import '../styles/OurPromise.css';

const jumbotron = {
    backgroundColor: "white",
}

const imageDimension = {
    marginTop: "-50px",
    width: "300px",
    transitionDuration: "5s",
    height: "300px"
}

const headerText = {
    // color: "#263238",
    fontSize: "50px"
}

const mainText = {
    // color: "#263238",
    fontSize: "27px",
    textAlign: "left"
}

const subText = {
    fontSize: "20px",
    textAlign: "left"
}

const midiSpace = {
    width: "100%",
    height: "100px"
}

function OurPromise() {
    return (
        <div>
        {/* <div style={midiSpace}></div> */}
            <Jumbotron fluid style = {jumbotron}>
                <Container >
                    <h1 style={headerText}>Our Promise</h1>
                </Container>
            </Jumbotron>
            <Container>
                <Row>
                    <Col xs={12} md={12} lg={4}>
                        <img style={imageDimension} src={ image5 } fluid alt="Zero Effort Banner"/>
                    </Col>
                    <Col xs={12} md={12} lg={8}>
                        <h2 style={mainText}>Zero Effort</h2>
                        <p style={subText}>Opening an EasyMarket account with us is 100% paperless. No physical forms, photocopies or photographs.</p>
                    </Col>
                </Row>
                <div style={midiSpace}></div>
                <Row>
                    <Col xs={12} md={12} lg={{span: 4, order: 12}}>
                        <img style={imageDimension} src={ image4 } alt="Eliminate Trust Banner"/>
                    </Col>
                    <Col xs={12} md={12} lg={{span: 8, order: 1}}>
                        <h2 style={mainText}>Eliminate Trust Issues</h2>
                        <p style={subText}>We understand nobody wants to get scammed You don't want to release your goods before getting your money, and they don't want to pay you before receiving what they ordered. Don't worry. Just release the item. We will transfer the money to your account promptly.</p>
                    </Col>
                </Row>
                <div style={midiSpace}></div>
                <Row>
                    <Col xs={12} md={12} lg={4}>
                        <img style={imageDimension} src={ image2 } alt="Safe and Secure Banner"/>
                    </Col>
                    <Col xs={12} md={12} lg={8}>
                        <h2 style={mainText}>Safe and Secure</h2>
                        <p style={subText}>EasyMarket uses bank-grade security to manage your money and your personal data is not shared with anyone.</p>
                    </Col>
                </Row>
                <div style={midiSpace}></div>
                <Row>
                    <Col xs={12} md={12} lg={{span: 4, order: 12}}>
                        <img style={imageDimension} src={ image10 } alt="Always Available Banner"/>
                    </Col>
                    <Col xs={12} md={12} lg={{span: 8, order: 1}}>
                        <h2 style={mainText}>Always Available</h2>
                        <p style={subText}>EasyMarket are always there to provide an extra source of income.</p>
                    </Col>
                </Row>
                <div style={midiSpace}></div>
                <Row>
                    <Col xs={12} md={12} lg={4}>
                        <img style={imageDimension} src={ image3 } alt="Transparent Banner"/>
                    </Col>
                    <Col xs={12} md={12} lg={8}>
                        <h2 style={mainText}>Fully Transparent</h2>
                        <p style={subText}>No hidden charges or fees, get full account of how your money and goods are managed on your personal dashboard.</p>
                    </Col>
                </Row>
                <div style={midiSpace}></div>
            </Container>
            
        </div>
    )
}

export default OurPromise
