import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as a from "./../actions";
import { Link } from "react-router-dom";
// import Image from 'react-bootstrap/Image'

function Pedals(props) {
  const { error, isLoading, pedals } = props.apiResponse;
  const { dispatch } = props;

  useEffect((props) => {
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
        {pedals.map((pedal, index) => (

          <img id={index} width="250px" src={pedal.image_url} alt="pedal"/>
        ))}
        <button onClick= {() => dispatch(a.makePedalApiCall('http://localhost:3001/api/v1/overdrive_pedals'))}></button>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    apiResponse: state.getPedalsResponse
  }
}

export default connect(mapStateToProps)(Pedals);
