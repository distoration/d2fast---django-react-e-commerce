import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import FormContainer from '../elements/FormContainer'

import { Form, Button, Row, Col, Table } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../elements/Loader'
import Message from '../elements/Message'
import { getUserDetails, updateUserProfile } from '../actions/userActions'
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants'
import { listMyOrders } from '../actions/orderActions'

function ProfileScreen() {

        const location = useLocation()
        const navigate = useNavigate()
        
        const [name, setName] = useState('')
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        const [confirmPassword, setConfirmPassword] = useState('')

        const [message, setMessage] = useState('')
            
        const dispatch = useDispatch()
           
        const userDetails = useSelector(state => state.userDetails)
        const { error, loading, user } = userDetails

        const userLogin = useSelector(state => state.userLogin)
        const { userInfo } = userLogin

        const userUpdateProfile = useSelector(state => state.userUpdateProfile)
        const { success } = userUpdateProfile

        const orderListMy = useSelector(state => state.orderListMy)
        const { loading: loadingOrders, error: errorOrders, orders } = orderListMy

        useEffect(() => {
            if (!userInfo) {
                navigate('/password-reset')
            } else {
                if (!user || !user.name || success || userInfo._id !== user._id) {
                    dispatch({ type: USER_UPDATE_PROFILE_RESET })
                    dispatch(getUserDetails('profile'))
                    dispatch(listMyOrders())
                } else {
                    setName(user.name)
                    setEmail(user.email)

                }
            }
        }, [dispatch, navigate, userInfo, user, success])
                 
        const submitHandler = (e) => {
            e.preventDefault()
        
            if (password != confirmPassword){
                setMessage('Passwords do not match')
            } else {
                dispatch(updateUserProfile({
                    'id': user._id,
                    'name': name,
                    'email': email,
                    'password': password,
                }))
                setMessage('')

            }
        }
            


  return (
    <Row className="email-return">
        <FormContainer>
            <h2>Find your account</h2>
            {message && <Message variant='danger'>{message}</Message>}
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>

                <Form.Group controlId='email'>
                        <Form.Label>Please enter your email to search for your account.</Form.Label>
                        <Form.Control
                            required
                            type='email'
                            placeholder="Type your email..."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        >
                        </Form.Control>
                </Form.Group>


                <Button type='submit' variant='primary'>
                    Reset
                </Button>

            </Form>
        </FormContainer>

    </Row>
  )
}

export default ProfileScreen