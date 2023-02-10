import React, { useEffect } from 'react'
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import Message from '../elements/Message'
import { addToCart, removeFromCart } from '../actions/cartActions'
 
function CartScreen() {

  const navigate = useNavigate()
  const location = useLocation()

  const {id} = useParams()
  const productId = id

  //const qty = location.state ? Number(location.state) : 1
  const qty = location.state ? Number(location.state) : 1 
  const dispatch = useDispatch()
 
  const cart = useSelector(state => state.cart)
  const {cartItems} = cart
    
  useEffect(() => {
      if (productId) {
          dispatch(addToCart(productId, qty))
      }
        
  }, [dispatch, productId, qty])


  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  const checkoutHandler = () => {
    navigate('/shipping')
    // /login?redirect=s
  //navigate('/login?redirect=shipping')
  }
 
  return (
       <Row>
            <Col md={8}>
                <h1>Cart</h1>
                {cartItems.length === 0 ? (
                    <Message variant = 'info'>
                        Your cart is empty <Link to='/'>Back</Link>
                    </Message>

                ) : (
                        <ListGroup variant='flush'>
                            {cartItems.map(item => (
                                <ListGroup.Item key={item.product}>
                                    <Row>
                                        <Col md={2}>
                                            <Image src={item.image} alt={item.name} fluid rounded />
                                        </Col>

                                        <Col md={3}>
                                            <Link to={`/product/${item.product}`}>{item.name}</Link>
                                        </Col>

                                        <Col md={2}>
                                            ${item.price}
                                        </Col>
                                        
                                        <Col md={3}>
                                            <Form.Control
                                                as="select"
                                                value={item.qty}
                                                onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}
                                            >
                                                {                    
                                                    [...Array(item.amountInStock).keys()].map((x) => (
                                                        <option key={x + 1} value={x + 1}>
                                                            {x + 1}
                                                        </option>
                                                    ))
                                                }
                                            </Form.Control>     
                                        </Col>

                                        <Col md={1}>
                                            <Button
                                                type='button'
                                                variant='light'
                                                onClick={() => removeFromCartHandler(item.product)}
                                            >
                                                <i className='fas fa-trash'></i>

                                            </Button>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    )}
                </Col>

                <Col md={4}>      
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h2>Total products: ({cartItems.reduce((acc, item) => acc + item.qty, 0)})</h2>
                                ${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}
                            </ListGroup.Item>
                        </ListGroup>

                        <ListGroup.Item>
                            <Button
                                type='button'
                                className="btn-block"
                                disabled={cartItems.length === 0}
                                onClick={checkoutHandler}
                            >
                                Continue
                            </Button>
                        </ListGroup.Item>
                   </Card>          
            </Col>
      </Row>
  )
}
 
export default CartScreen