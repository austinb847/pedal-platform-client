import React from 'react'
import Navigation from './Navigation'
import headerImage from '../HomeIcon.png'
import ImageFader from './ImageFader'

function Home(props) {
  return (
    <React.Fragment>
      {/* <Navigation {...props} handleLogout={props.handleLogout} loggedInStatus={props.loggedInStatus}/> */}
      <section class="intro">
        <div class="content">
          <ImageFader/>
          <h1>You can create full screen sections without javascript.</h1>
          <p>The height is set to 90vh, that means 90% height.</p>
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
