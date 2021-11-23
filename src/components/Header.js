import React from 'react'
import { Container, Navbar ,Nav} from 'react-bootstrap'


const Header = () => {
    return (
        <>      
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Reagent-Shop</Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link href="#features"><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
                        <Nav.Link href="#pricing"><i className='fas fa-user'></i>Sign In</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
