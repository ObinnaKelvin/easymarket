// import { Carousel } from 'antd';

import React from 'react'

import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";
// import NavBar from './NavBar';

const Hero = () => {
  return (
    // <MDBContainer>
    <>
      {/* <NavBar /> */}
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg"
                alt="First slide"
                // style={{heigth: 100+"px"}}
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg"
                alt="Second slide"
                // style={{heigth: 100+"px"}}
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"
                alt="Third slide"
                // style={{heigth: 100+"px"}}
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>    
    </>

  );
}



// function Hero() {
//     return (
//         <div>
//             <Carousel effect="fade" autoplay="20000ms">
//                 <div>
//                 <h3>1</h3>
//                 </div>
//                 <div>
//                 <h3>2</h3>
//                 </div>
//                 <div>
//                 <h3>3</h3>
//                 </div>
//                 <div>
//                 <h3>4</h3>
//                 </div>
//             </Carousel>
//         </div>
//     )
// }

export default Hero
