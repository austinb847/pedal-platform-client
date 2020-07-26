import React from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

const Header = (props) => {

  const handleClick = () => {
      axios.delete('http://localhost:3001/api/v1/logout', {withCredentials: true})
      .then(response => {
        props.handleLogout()
        props.history.push('/')
      })
      .catch(error => console.log(error))
    }
return (
   
    <div>
      {
        !props.loggedInStatus ?
        <Link to='/login'>Log In</Link> :
        null
      }
      <br></br>
      <Link to='/signup'>Sign Up</Link>
      <br></br>
      { 
        props.loggedInStatus ? 
        <Link to='/logout' onClick={handleClick}>Log Out</Link> : 
        null
      }
      <Link to='/pedals'>All Available Pedals</Link> 
    </div>
  );
};
export default Header;