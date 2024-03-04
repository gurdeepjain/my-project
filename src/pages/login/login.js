import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { LogInSignUp } from '../LogIn-SignUp/Login-Signup';

const Login = ({ fromData, handleSubmit, handelChanges }) => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <h2 className="text-center mt-5 mb-4">Login</h2>
          {/* <LogInSignUp /> */}
          <Form onSubmit={handleSubmit}>
            <Form.Group >
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

            <Form.Group >
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
