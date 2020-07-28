import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as a from "./../actions";
import { Link } from "react-router-dom";
import Image from 'react-bootstrap/Image'
import Spinner from 'react-bootstrap/Spinner'
import { Layout, Menu, Input } from 'antd';



function PedalDetail(props) {
  const { error, isLoading, pedal } = props.pedal;
  const { dispatch } = props;
  const { Header, Sider, Content } = Layout;

  useEffect(() => {
    dispatch(a.getSelectedPedal(props.match.params.id));
    return () => {};
  }, []);


  return (
    <div>
      
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    pedal: state.getSelectedPedal,
  };
};

export default connect(mapStateToProps)(PedalDetail);
