import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Rating from '../components/Rating'
import axios from 'axios'

const ProductScreen = () => {
  const [product, setProduct] = useState({});
  let params = useParams();

  useEffect(()=> {
    const fetchProducts = async () => {
      const { data } = await axios.get(`/api/products/${params.id}`);

      setProduct(data);

    }
    fetchProducts()
  },[])

  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        {' '}
        Go Back{' '}
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup.Item>
            <h3> {product.name} </h3>
          </ListGroup.Item>
          <ListGroup.Item>
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            >
              {' '}
              {}{' '}
            </Rating>
          </ListGroup.Item>
          <ListGroup.Item>Price: $ {product.price}</ListGroup.Item>
          <ListGroup.Item>Description: {product.description}</ListGroup.Item>
        </Col>
        <Col md={3}>
            <Card>
                <ListGroup varian='flush'>
                    <ListGroup.Item>
                        <Row>
                            <Col>
                            Price:
                            </Col>
                            <Col>
                            <strong>
                                $ {product.price}
                            </strong>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col>
                            Status:
                            </Col>
                            <Col>
                            <strong>
                                 {product.countInStock >0 ? 'In Stock' : 'Out of Stock'}
                            </strong>
                            </Col>
                        </Row>
                    </ListGroup.Item>   

                    <ListGroup.Item>
                        <Row>
                            <Col>
                            Status:
                            </Col>
                            <Col>
                            <strong>
                                 {product.countInStock >0 ? 'In Stock' : 'Out of Stock'}
                            </strong>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                       <Button className='btn-block' type='button' disabled={product.countInStock===0}>
                           ADD TO CART
                       </Button>
                    </ListGroup.Item>

                </ListGroup>
            </Card>

        </Col>
      </Row>
    </>
  )
}

export default ProductScreen