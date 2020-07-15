import React from 'react';
import { Container, Row, Col} from "react-bootstrap";
import { Button} from 'antd';
import "../../styles/TopProductsHome.css";
import ProductCard from '../Utils/ProductCard';

function TopProductsHome() {
    return (
        <div >
            <Container className="holderDiv">
                    <Row>
                        <Col span={4} push={6}>
                            <h4>Top Products</h4>
                        </Col>
                        <Col span={12} pull={18} justify="end">
                            <Button type="primary">See All</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} sm={6} md={6} lg={4} xl={3}>
                            <ProductCard />
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={4} xl={3}>
                            <ProductCard />
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={4} xl={3}>
                            <ProductCard />
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={4} xl={3}>
                            <ProductCard />
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={4} xl={3}>
                            <ProductCard />
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={4} xl={3}>
                            <ProductCard />
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={4} xl={3}>
                            <ProductCard />
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={4} xl={3}>
                            <ProductCard />
                        </Col>
                    </Row>
            </Container>
        </div>
    )
}

export default TopProductsHome
