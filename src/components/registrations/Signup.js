import React, { Component } from 'react';
import axios from 'axios'
import { Form, Button } from 'react-bootstrap';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: '',
      email: '',
      password: '',
      password_confirmation: '',
      errors: ''
     };
  }
  handleChange = (event) => {
      const {name, value} = event.target
      this.setState({
        [name]: value
      })
    };
  handleSubmit = (event) => {
      event.preventDefault()
      const {username, email, password, password_confirmation} = this.state
      let user = {
        username: username,
        email: email,
        password: password,
        password_confirmation: password_confirmation
      }
  axios.post('http://localhost:3001/api/v1/users', {user}, {withCredentials: true})
      .then(response => {
        if (response.data.status === 'created') {
          this.props.handleLogin(response.data)
          this.redirect()
        } else {
          this.setState({
            errors: response.data.errors
          })
        }
      })
      .catch(error => console.log('api errors:', error))
    };
  redirect = () => {
      this.props.history.push('/')
    }
  handleErrors = () => {
      return (
        <div>
          <ul>{this.state.errors.map((error) => {
            return <li key={error}>{error}</li>
          })}</ul> 
        </div>
      )
    }
  render() {
    const {username, email, password, password_confirmation} = this.state
    return (
        
        <div className="login-form-container">
            <h1>Sign Up</h1>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="formBasicUserName">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter Username" name ="username" value = {username} onChange={this.handleChange} required/>
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name ="email" value = {email} onChange={this.handleChange} required/>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name = "password" value = {password} onChange={this.handleChange} required/>
              </Form.Group>
              <Form.Group controlId="formBasicPasswordConfirmation">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control type="password" placeholder="Password" name = "password_confirmation" value = {password_confirmation} onChange={this.handleChange} required/>
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
              </Form.Group>
              <Button variant="success" type="submit">
                Sign Up
              </Button>
            </Form>
        
          <div>
            {
              this.state.errors ? this.handleErrors() : null
            }
          </div>
        </div>
      );
    }
  }
export default Signup;