import React, { useEffect, useState } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import FormContainer from './../components/FormContainer';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../actions/userAction';
import Message from './../components/Message';
import Loader from '../components/Loader';

const RegisterScreen = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)

    const dispatch = useDispatch()

    const userRegister = useSelector(state => state.userRegister)
    const { loading, error, userInfo } = userRegister


    let location = useLocation()
    let navigate = useNavigate()


    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {
        if(userInfo) {
            navigate(redirect)
        }
    }, [navigate, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        if( password !== confirmPassword ) {
            setMessage('Passwords do not match ')
        }else {
            console.log(email)
            dispatch(register(name, email, password))
        }

    }

    // const emailHandler = (e) =>  setEmail(e.target.value);
    // console.log(emailHandler)



    return (
        <FormContainer children={
            <div>
                <h1>Sign Up</h1>
                {message && <Message variant='danger'>{message}</Message>}
                {error && <Message variant='danger'>{error}</Message>}
                {loading && <Loader/>}
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId='name'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type='name'
                            placeholder='Enter Name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        ></Form.Control>
                    </Form.Group>


                    <Form.Group controlId='email'>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                            type='email'
                            placeholder='Enter Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        ></Form.Control>
                    </Form.Group>


                    <Form.Group controlId='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type='password'
                            placeholder='Enter Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        ></Form.Control>
                    </Form.Group>
                    <Form.Group controlId='confirmPassword'>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            type='password'
                            placeholder='Enter Confirm Password'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            ></Form.Control>
                    </Form.Group>
                    <Button type='submit' variant='primary'>
                        Register
                    </Button>
                </Form>

                   

                <Row className='py-3'>
                    <Col>
                        Have an Account? {''}
                        <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
                            Log In
                        </Link>
                    </Col>
                </Row></div>} />
    )
}

export default RegisterScreen