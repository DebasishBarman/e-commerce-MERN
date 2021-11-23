import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'

const Footer = () => {
    return (
        <React.Fragment>
        <Container>
            <Row>
                <Col className="text-center py-3">
                    Copyright &copy; Reagent Shop
                </Col>
            </Row>
        </Container>
        </React.Fragment>
    )
}

export default Footer
