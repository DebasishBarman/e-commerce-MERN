import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import products from '../products'
const HomeScreen = () => {
    console.log(products)
    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                {
                    products.map((product) => {
                        return (
                            <Col sm={12} md={6} lg={4}>
                                <Product product={product}/>
                            </Col>
                        )
                    })
                }
            </Row>

        </>
    )
}

export default HomeScreen
