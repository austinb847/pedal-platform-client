import React from 'react'
import Header from './Header'

function Home(props) {
  return (
    <div>
      <Header {...props} handleLogout={props.handleLogout} loggedInStatus={props.loggedInStatus}/>
      <p>Hello World</p>
    </div>
  )
}

export default Home
