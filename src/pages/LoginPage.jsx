import React, { useState } from 'react';
import {Form, Button } from 'react-bootstrap';
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
        }, 1000); // 1000 milliseconds = 1 second
      })
      .catch(error => {
        console.error("Login failed:", error);
        setError('Login failed. Please try again.');
      });
  };

  const cardStyles = {
    background: '#fbfbfb',
    boxShadow: '1px 2px 10px rgba(0, 0, 0, 0.5)',
    height: '410px',
    margin: '6rem auto 8.1rem auto',
    padding: '15px',
    width: '450px',
  };

  return (
    <div className="row w=100 mx-0 aut-page">
      <div >
        <div className="card mt-5" style={cardStyles}>
          <div className="row">
            <div className="auth-form-wrapper px-4 py-5">
              <div className="noble-ui-logo d-block mb-4">
                <h1>ADMIN<span>Panel</span></h1>
              </div>
              <Form>
                <Form.Group controlId="formUsername">
                  <label htmlFor="userEmail" className="form-label">
                    Email
                  </label>
                  <Form.Control
                    type="email"
                    placeholder="example@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formPassword">
                  <label htmlFor="userPassword" className="form-label mt-3">
                    Password
                  </label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>

                {error && <p className="text-danger">{error}</p>}

                <div style={{ width:"fit-content", marginLeft:"auto", marginRight:"auto",marginTop: "25px" }}>
                  <Button variant="primary" onClick={handleLogin}>
                    Se connecter
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default LoginPage;
