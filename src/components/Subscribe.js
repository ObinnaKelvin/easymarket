import React from 'react';
import {Jumbotron, Container} from 'react-bootstrap';
//import image1 from '../img/cloud.png';

const jumbotron = {
    backgroundColor: "white",
    // backgroundImage: {image1}
}

const mainText = {
    color: "#263238"
}

function Subscribe() {
    return (
        <div>
            <Jumbotron fluid style = {jumbotron}>
                <Container style = {mainText}>
                    <h1>Subscribe to our newsletter</h1>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default Subscribe
