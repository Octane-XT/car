import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import LoginService from '../services/Loginservice';

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  

  const handleLogin = () => {
    // Placeholder for actual login logic
    // You should replace this with your authentication mechanism
    console.log("tafiditra1");
    LoginService.check(email,password);
    if (localStorage.getItem('token')) {
        console.log("tafiditra2");
        onLogin();
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={6}>
          <h2 className="text-center">Login</h2>
          <Form>
            <Form.Group controlId="formUsername">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="admin"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="admin"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            {error && <p className="text-danger">{error}</p>}

            <Button variant="primary" block onClick={handleLogin}>
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
