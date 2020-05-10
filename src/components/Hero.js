import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Navigation from '../components/Navigation'
import '../styles/Hero.css'

const mainText = {
    transitionDuration: "5s",
    color: "#263238"
}

const subText = {
    transitionDuration: "5s",
    color: "#757575"
}
   

function Hero() {
    return (
        <div>
            <Navigation />
            <section className="banner">
                <Container>
                <Row>
                    {/* <Col sm={8}>sm=8</Col> */}
                    <Col md={6} className="banner-text">
                        <h2 style={mainText}>Start Your Business From Home With Zero Investment</h2>
                        <p style={subText}>Join Nigeria's #1 Reselling platform trusted by 200+ Resellers who are earning more than #25,000 every month!</p>
                    </Col>
                </Row>
                </Container>
            </section>
            
        </div>
    )
}

export default Hero
