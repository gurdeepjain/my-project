import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios'

const Login = () => {
  const [fromData, setFormData] = useState({
    email:'',
    password:''
  })
  
  const handelChanges = (e) => {
    setFormData({
        ...fromData,
        [e.target.name]: e.target.value
    })
  }

  const headers= {
    'Content-Type': 'application/json'
  }

  const payload = JSON.stringify(fromData)

  const handleSubmit = (e) => {
    e.preventDefault();
   axios.get(`http://localhost:3002/users`)
   .then((res) =>{
    const isValidUser = res.data.some(user => user.email === fromData.email && user.password === fromData.password)
    if (isValidUser) {
        // Handle successful login
        console.log("Login successful!");
      } else {
        alert('Invalid username or password.');
      }
   })
   .catch((err) =>{
    alert("Something went wrong")
   })
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <h2 className="text-center mt-5 mb-4">Login</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                id="email"
                name="email"
                value={fromData.email}
                onChange={handelChanges}
                required
                autoComplete='off'
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label className='mt-3'>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                id="password"
                name="password"
                value={fromData.password}
                onChange={handelChanges}
                required
                autoComplete='off'
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mt-3">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
