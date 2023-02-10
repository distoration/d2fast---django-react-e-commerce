import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../elements/Loader'
import Message from '../elements/Message'
import FormContainer from '../elements/FormContainer'
import { login } from '../actions/userActions'


function LoginScreen() {

    const location = useLocation()
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const redirect = location.state ? Number(location.state) : '/'

    const userLogin = useSelector(state => state.userLogin)
    const { error, loading, userInfo } = userLogin

    useEffect(() => {
        if (userInfo) {
            navigate(redirect)
        }
    }, [navigate, userInfo, redirect])
     
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }
  
  
    return (
        <FormContainer>
            <h1>Sign In</h1>
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>
                
                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group><br></br>

                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>
                <Button type='submit' variant='primary'>
                    Sign In
                </Button>
            </Form>

            <Row className='py-3'>
                <Col>
                    New Customer?   &nbsp;
                    <Button type='submit' variant='primary'>
                        <Link class="register-text"
                            to={redirect ? `/register?redirect=${redirect}` : '/register'}>
                            &nbsp;Register
                        </Link>

                        
                    </Button>
                    <Link 
                        class="forgoten-password-text"
                        to={redirect ? `/register?redirect=${redirect}` : '/register'}>
                        &nbsp;Forgotten password?
                    </Link>
                </Col>
            </Row>
        </FormContainer>
  )
}

export default LoginScreen