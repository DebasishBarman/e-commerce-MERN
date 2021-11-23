import React from 'react'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom'

const ProductScreen = ({ match }) => {
    const params = useParams()
    // console.log(params)
    const product = products.find(p => p._id === params.id)
    console.log(match)

    return (
        <React.Fragment>
            <Link className='btn btn-light my-3' to='/'>Go Back</Link>
            Produc
            <span>{product.name}</span>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h4>{product.name}</h4>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price: Rs{product.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price: Rs{product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Price
                                    </Col>
                                    <Col>
                                        <strong>Rs.{product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Status
                                    </Col>
                                    <Col>
                                        {product.countInStock>0 ? 'In Stock':'Out Of Stock'}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                            <Row>
                                <Button className='btn-block' type='button'
                                disabled={product.countInStock===0}
                                >Add To Cart</Button>
                            </Row>
                        </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default ProductScreen
