import React, {Component} from 'react';
import "../../styles/Home.css";
import SideMenu from "./SideMenu";
import Hero from './Hero';
import { Row, Col, Divider,Menu, Button} from 'antd';
import AllCategories from './AllCategories';
import TopProducts from './TopProducts.Home';
import FeaturedProducts from './FeaturedProducts.Home';


class Home extends Component {

    render() {
        return (
            <div>
                <Hero />
                <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>
                    Fill rest 
                </Divider>
                
                <Row>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <AllCategories />
                    </Col>
                </Row>
                <div class="miniSpace"></div>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <TopProducts />
                    </Col>
                </Row>
                <div class="miniSpaceSmall"></div>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <FeaturedProducts />
                    </Col>
                </Row>
                {/* <Row>
                    <Col flex="auto">
                        <SideMenu />
                    </Col>
                    <Col flex="auto">

                        Fill Rest
                        <div></div>
                        This is Home
                        Fill Rest
                        <div></div>
                        This is Home
                        Fill Rest
                        <div></div>
                        This is Home
                        Fill Rest
                        <div></div>
                        This is Home
                    </Col>
                </Row> */}

            </div>
        )
    }

}

export default Home
