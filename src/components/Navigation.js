import React from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import { Nav, NavDropdown, Button, Navbar } from 'react-bootstrap'
import headerImage from '../HomeIcon3.png'

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
  <Navbar fixed="top" style={{backgroundColor: '#0ba44d'}} expand="lg" className='nav'>
    <Navbar.Brand href="/"><img className="nav-icon" src={headerImage} alt='animal'/></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
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