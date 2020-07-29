import React, { Component } from 'react';
import axios from 'axios'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './Home'
import Navigation from './Navigation'
import Login from './registrations/Login'
import Signup from './registrations/Signup'
import Pedals from './Pedals'
import PedalDetail from './PedalDetail';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: false,
      user: {},
      isAdmin: false
     };
  }
  componentDidMount() {
      this.loginStatus()
  }
  loginStatus = () => {
    axios.get('http://localhost:3001/api/v1/logged_in', {withCredentials: true})
    .then(response => {
      if (response.data.logged_in) {
        this.handleLogin(response)
      } else {
        this.handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
  }
  
  handleLogin = (data) => {
    if(data.user.admin) {
      this.setState({
        isLoggedIn: true,
        isAdmin: true,
        user: data.user
      })
    } else {
      this.setState({
        isLoggedIn: true,
        isAdmin: false,
        user: data.user
      })
    }
  }
  handleLogout = () => {
      this.setState({
      isLoggedIn: false,
      user: {},
      isAdmin: false
      })
  }
render() {
    return (
      <div>
        <BrowserRouter>
          <Navigation handleLogout={this.handleLogout} loggedInStatus={this.state.isLoggedIn}/>
          <Switch>
            <Route 
              exact path='/' 
              render={props => (
                <Home /> //pass prop loggedInStatus={this.state.isLoggedIn}/>)}/>
              )}
            />
            <Route 
              exact path='/login' 
              render={props => (
              <Login {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>
              )}
            />
            <Route 
              exact path='/signup' 
              render={props => (
              <Signup {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>
              )}
            />
            <Route
              exact path='/pedals'
              render={props => (
                <Pedals {...props} />
              )}
            />
            <Route
              exact path='/pedals/:id'
              render={props => (
                <PedalDetail {...props} />
              )}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;