import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import LoginService from '../services/Loginservice';

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  

  const handleLogin = () => {
    console.log("tafiditra1");

    // Assuming LoginService.check returns a promise
    LoginService.check(email, password)
      .then(() => {
        // Simulate a delay of 1 second (adjust as needed)
        setTimeout(() => {
          if (localStorage.getItem('token') !== null) {
            console.log("tafiditra2");
            navigate('/');
          } else {
            setError('Invalid username or password');
          }
        }, 2000); // 1000 milliseconds = 1 second
      })
      .catch(error => {
        console.error("Login failed:", error);
        setError('Login failed. Please try again.');
      });
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
