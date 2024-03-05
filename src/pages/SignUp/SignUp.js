import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [form, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [passwordsMatch, setPasswordsMatch] = useState(true);

    const handelChanges = (e) => {
        setFormData({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (form.password !== form.confirmPassword) {
            setPasswordsMatch(false);
            return; // Exit function early if passwords don't match
        }

        const payload = JSON.stringify(form)

        const headers = {
            'Content-Type': 'application/json'
        }
        axios.post(`http://localhost:3002/users`, payload, headers)
            .then((res) => {
                    console.log("successfully acccount created")
                    setFormData({
                        name: '',
                        email: '',
                        password: '',
                        confirmPassword: ''
                    });
        
                    // Reset passwords match state
                    setPasswordsMatch(true);
            })
            .catch((err) => {
                setPasswordsMatch(false)
            })
    };
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col xs={12} md={6}>
                    <h2 className="text-center mt-5 mb-4">Sign Up</h2>
                    <Form onSubmit={handleSubmit}>
                    <Form.Group >
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter name"
                                id="name"
                                name="name"
                                value={form.name}
                                onChange={handelChanges}
                                required
                                autoComplete='off'
                            />
                        </Form.Group>

                        <Form.Group >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                id="email"
                                name="email"
                                value={form.email}
                                onChange={handelChanges}
                                required
                                autoComplete='off'
                            />
                        </Form.Group>

                        <Form.Group >
                            <Form.Label className='mt-3'>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                id="password"
                                name="password"
                                value={form.password}
                                onChange={handelChanges}
                                required
                                autoComplete='off'
                            />
                        </Form.Group>

                        <Form.Group >
                            <Form.Label className='mt-3'>Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Confirm Password"
                                id="confirmPassword"
                                name="confirmPassword"
                                value={form.confirmPassword}
                                onChange={handelChanges}
                                required
                                autoComplete='off'
                            />
                        </Form.Group>
                        {passwordsMatch ? null : <p style={{ color: 'red' }}>Passwords do not match</p>}

                        <Button variant="primary" type="submit" className="w-100 mt-3">
                            Sign Up
                        </Button>
                        <h6 className="text-center mt-4 mb-4">Already have an account?<Link to="/">Login</Link></h6>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default SignUp;
