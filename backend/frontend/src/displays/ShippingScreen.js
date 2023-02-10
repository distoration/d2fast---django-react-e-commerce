import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import CheckoutSteps from '../elements/CheckoutSteps'
import FormContainer from '../elements/FormContainer'
import { saveShippingAddress } from '../actions/cartActions'

function ShippingScreen() {

    const cart = useSelector(state => state.cart)
    const {shippingAddress} = cart
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
    const [country, setCountry] = useState(shippingAddress.country)
    const [battleTag, setBattleTag] = useState(shippingAddress.battleTag)


    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(saveShippingAddress({ address, city, postalCode, country, battleTag }))
        navigate('/payment')
    }

    return (
        <FormContainer>
            <CheckoutSteps step1 step2 />
            <h1>BattleTag (optional)</h1>
            <Form onSubmit={submitHandler}>

                <Form.Group controlId='battleTag'>
                        <Form.Control

                            type='text'
                            placeholder="Your BattleTag..."
                            value={battleTag ? battleTag : ''}
                            onChange={(e) => setBattleTag(e.target.value)}
                        >
                        </Form.Control>
                </Form.Group>


                <Button type='submit' variant='primary'>
                    Continue
                </Button>
            </Form>
        </FormContainer>
   )
}

export default ShippingScreen