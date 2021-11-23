import React,{useEffect,useState} from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
// import axios from 'axios'
import products from '../products'


const HomeScreen = () => {
    // const [products,setProducts]=useState([])
    // useEffect(()=>{
    //     const fetchData=async()=>{
    //         const {data}=await axios.get('http//127.0.0.1:3001/products');

    //         // setProducts(
    //         //     data.map()
    //         // )

            

    //     }
    //     fetchData()
    // },[])

    return (
        <React.Fragment>
            <h1>Latest Products</h1>
            <Row>
                {
                    products.map((product) => {
                        return (
                            <Col key={product._id} sm={12} md={6} lg={4}>
                                <Product product={product}/>
                            </Col>
                        )
                    })
                }
            </Row>

        </React.Fragment>
    )
}

export default HomeScreen
