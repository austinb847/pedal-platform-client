import React from 'react'
import Navigation from './Navigation'
import headerImage from '../HomeIcon.png'
import ImageFader from './ImageFader'
import {Button} from 'react-bootstrap'

function Home(props) {
  return (
    <React.Fragment>
      {/* <Navigation {...props} handleLogout={props.handleLogout} loggedInStatus={props.loggedInStatus}/> */}
      <section class="intro">
        <div class="content">
          <ImageFader/>
          <h1 class="home-img-text">Helping Musicians Discover Their Sound Since 2020</h1>
        </div>
      </section>

      <section className="home-section">  
        <div class="content">
          <h1>Resize your browser and see how they adapt.</h1>
        </div>
      </section>

      <section className="home-section">  
        <div class="content">
          <h1>It's amazing and fast.</h1>
        </div>
      </section>
 
      <section className="home-section">  
        <div class="content">
          <h1>See the <a href="http://caniuse.com/#feat=viewport-units">browser support.</a></h1>
        </div>
      </section>

      <footer className="footer">
        Made by <a href="https://www.twitter.com/ckor">@ckor</a>
      </footer>
    </React.Fragment>
  )
}

export default Home
