import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as a from "./../actions";
import { Link } from "react-router-dom";
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'

function Pedals(props) {
  const { error, isLoading, pedals } = props.apiResponse;
  const { dispatch } = props;

  useEffect(() => {
    dispatch(a.makePedalApiCall('http://localhost:3001/api/v1/pedals'));
    return () => {};
  }, []);


  if(error) {
    return <p>Error: {error.message}</p>;
  } else if (isLoading) {
    return <p>Loading...</p>;
  } else {
    return (
      <React.Fragment>
        <Container>
          <div className="row">
            {pedals.map((pedal, index) => (
              <div className="column">
                <div className="pedal-item">
                  <Image id={index} src={pedal.image_url} width="250px" alt="pedal" thumbnail/>
                  <div className="pedal-name">{pedal.name}</div>
                </div>
              </div>
            ))}
            <button onClick= {() => dispatch(a.makePedalApiCall('http://localhost:3001/api/v1/overdrive_pedals'))}></button>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    apiResponse: state.getPedalsResponse
  }
}

export default connect(mapStateToProps)(Pedals);
