import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';

import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { saveShippingAddress } from '../actions/cartAction';

import FormContainer from './../components/FormContainer';

const ShippingScreen = () => {

    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart


    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
    const [country, setCountry] = useState(shippingAddress.country)

    const dispatch = useDispatch()

    let navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(saveShippingAddress({ address, city, postalCode, country}))
        navigate('/payment')
    }

    return (
    <FormContainer children={<div>
        <h1>Shipping</h1>
        <Form onSubmit={submitHandler}>
            <Form.Group controlId='address'>
                <Form.Label>Address</Form.Label>
                <Form.Control
                type='text'
                placeholder='Enter address'
                value={address}
                required
                onChange={(e) => setAddress(e.target.value)}
                ></Form.Control>
            </Form.Group>
            
            
            <Form.Group controlId='city'>
                <Form.Label>City</Form.Label>
                <Form.Control
                type='text'
                placeholder='Enter city'
                value={city}
                required
                onChange={(e) => setCity(e.target.value)}
                ></Form.Control>
            </Form.Group>


            <Form.Group controlId='postalCode'>
                <Form.Label>PostalCode</Form.Label>
                <Form.Control
                type='text'
                placeholder='Enter postalCode'
                value={postalCode}
                required
                onChange={(e) => setPostalCode(e.target.value)}
                ></Form.Control>
            </Form.Group>
            
            
            <Form.Group controlId='country'>
                <Form.Label>Country</Form.Label>
                <Form.Control
                type='text'
                placeholder='Enter country'
                value={country}
                required
                onChange={(e) => setCountry(e.target.value)}
                ></Form.Control>
            </Form.Group>

            <Button className='p-3' type='submit' variant='primary'>
                Continu
            </Button>
        </Form>
    </div>}/>
  )
}


export default ShippingScreen;