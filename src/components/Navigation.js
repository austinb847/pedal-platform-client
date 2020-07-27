import React from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import { Nav, NavDropdown, Button, Navbar } from 'react-bootstrap'

const Navigation = (props) => {

  const handleClick = () => {
      axios.delete('http://localhost:3001/api/v1/logout', {withCredentials: true})
      .then(response => {
        props.handleLogout()
        props.history.push('/')
      })
      .catch(error => console.log(error))
    }
return (
  <Navbar fixed="top" bg="light" expand="lg" className='nav'>
    {/* <Navbar.Brand href="/"><img src={animal} alt='animal'/></Navbar.Brand> */}
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
        {
           !props.loggedInStatus ?
           <Nav.Link href="/login">Log In</Nav.Link>:
           null
        }
        <Nav.Link href="/signup">Sign Up</Nav.Link>
        { 
        props.loggedInStatus ? 
        <Nav.Link href="/logout" onClick={handleClick}>Log Out</Nav.Link> : 
        null
        }
        <Nav.Link href="/pedals">All Available Pedals</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
   
    // <div>
    //   {
    //     !props.loggedInStatus ?
    //     <Link to='/login'>Log In</Link> :
    //     null
    //   }
    //   <br></br>
    //   <Link to='/signup'>Sign Up</Link>
    //   <br></br>
    //   { 
    //     props.loggedInStatus ? 
    //     <Link to='/logout' onClick={handleClick}>Log Out</Link> : 
    //     null
    //   }
    //   <Link to='/pedals'>All Available Pedals</Link> 
    // </div>
  );
};
export default Navigation;