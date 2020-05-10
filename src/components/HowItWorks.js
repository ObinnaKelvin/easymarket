import React from 'react';
import {Jumbotron, Container, Card, CardDeck} from 'react-bootstrap';
import image1 from '../img/cloud.svg';
import image2 from '../img/network.svg';
import image3 from '../img/trolley.svg';
import '../styles/Section1.css';

const jumbotron = {
    backgroundColor: "rgba(158, 158, 158, 0.1)",
}

const mainText = {
    color: "#263238"
}

const midiSpace = {
    width: "100%",
    height: "100px"
}

function HowItWorks() {
    return (
        <div>
            <Jumbotron fluid style = {jumbotron}>
                <Container style = {mainText}>
                    <h1>How it Works</h1>
                </Container>
                <div style={midiSpace}></div>
                <Container>
                    {/* <Row> */}
                        <CardDeck>
                            {/* <Col xs={12} md={12} lg={4}> */}
                                <Card 
                                className="Card" xs={12} md={12} lg={4}
                                >
                                    <Card.Img variant="top" className="CardImage" src={image1} />
                                    <Card.Body>
                                    <Card.Title>Download</Card.Title>
                                    <Card.Text>
                                        Download the app, sign up and upload your products to your online store.
                                    </Card.Text>
                                    </Card.Body>
                                    {/* <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                    </Card.Footer> */}
                                </Card>
                            {/* </Col> */}
                            {/* <Col xs={12} md={12} lg={4}> */}
                                <Card
                                className="Card" xs={12} md={12} lg={4}
                                >
                                    <Card.Img variant="top" className="CardImage" src={image2} />
                                    <Card.Body>
                                    <Card.Title>Share</Card.Title>
                                    <Card.Text>
                                        Share your link on your social media channels and start selling.
                                                We will advertise for you too.{' '}
                                    </Card.Text>
                                    </Card.Body>
                                    {/* <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                    </Card.Footer> */}
                                </Card>
                            {/* </Col> */}
                            {/* <Col xs={12} md={12} lg={4}> */}
                                <Card
                                className="Card" xs={12} md={12} lg={4}
                                >
                                    <Card.Img variant="top" className="CardImage" src={image3} />
                                    <Card.Body>
                                    <Card.Title>Delivery</Card.Title>
                                    <Card.Text>
                                                We handle the delivery, collect money on your behalf, and give you your money.
                                                No hassles. No Stories.
                                    </Card.Text>
                                    </Card.Body>
                                    {/* <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                    </Card.Footer> */}
                                </Card>
                            {/* </Col> */}
                        </CardDeck>
                    {/* </Row> */}
                    
                </Container>
                <div style={midiSpace}></div>
            </Jumbotron>
            
            
        </div>
    )
}

export default HowItWorks
