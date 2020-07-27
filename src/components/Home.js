import React from 'react'
import Nav from './Nav'

function Home(props) {
  return (
    <div>
      <Nav {...props} handleLogout={props.handleLogout} loggedInStatus={props.loggedInStatus}/>
      <p>Hello World</p>
    </div>
  )
}

export default Home
