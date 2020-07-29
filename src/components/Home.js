import React from 'react'
import Navigation from './Navigation'
import instructionsImg from '../instructions.png'
import phoneImg from '../7.png'
import ImageFader from './ImageFader'
import Button from 'react-bootstrap/Button'

function Home(props) {
  return (
    <React.Fragment>
      {/* <Navigation {...props} handleLogout={props.handleLogout} loggedInStatus={props.loggedInStatus}/> */}
      <section class="intro">
        <div class="content">
          <ImageFader/>
          <h1 class="home-img-text">Helping Musicians Discover Their Sound</h1>
          <Button variant="success"className="button-img-text"href="#">See Subscription Plans</Button>
        </div>
      </section>

      <section className="home-section">  
        <div class="content">
          <img className="how-to-image" src={instructionsImg}></img>
        </div>
      </section>

      <section className="home-section">  
        <div class="about-content">
          <h1>About Pedal Platform</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sollicitudin aliquet pulvinar. Aliquam erat volutpat. Praesent lobortis vulputate justo, ut maximus ipsum euismod nec. Donec eget imperdiet sapien, id dapibus libero. Quisque quis tristique orci. Aliquam erat volutpat. Aliquam vestibulum libero molestie dolor ultrices dapibus. Donec vitae pharetra purus.
          Nam maximus elit ex, in tristique diam interdum id. Sed non semper nisl. Aliquam efficitur, purus non vehicula accumsan, metus enim ullamcorper nisl, nec rutrum felis nunc nec augue. Donec feugiat lobortis mauris. Quisque varius libero nec pellentesque sagittis. Duis at erat arcu. Fusce ac luctus nulla, et auctor arcu. Cras tristique odio sed tellus mattis, at semper ex facilisis.</p>
        </div>
      </section>
 
      <section className="home-section">  
        <div class="content">
          <h1>Contact us <a href="#">contact@pedalplatform.com</a></h1>
        </div>
      </section>

      <footer className="footer">
        Site by <a href="">@Austin Butler</a>
      </footer>
    </React.Fragment>
  )
}

export default Home
