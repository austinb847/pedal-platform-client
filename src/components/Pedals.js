import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as a from "./../actions";
import { Link } from "react-router-dom";
import Image from 'react-bootstrap/Image'
import Spinner from 'react-bootstrap/Spinner'
import { Layout, Menu, Input } from 'antd';


function Pedals(props) {
  const { error, isLoading, pedals } = props.apiResponse;
  const { dispatch } = props;
  const { Header, Sider, Content } = Layout;
  const { Search } = Input;

  useEffect(() => {
    dispatch(a.makePedalApiCall('http://localhost:3001/api/v1/pedals'));
    return () => {};
  }, []);

  function getPedalsByCategory(type) {
    switch (type) {
      case "all":
        dispatch(a.makePedalApiCall('http://localhost:3001/api/v1/pedals'))
        break;
      case "overdrive":
        dispatch(a.makePedalApiCall('http://localhost:3001/api/v1/overdrive_pedals'))
        break;
      case "distortion":
        dispatch(a.makePedalApiCall('http://localhost:3001/api/v1/distortion_pedals'))
        break;
      case "fuzz":
        dispatch(a.makePedalApiCall('http://localhost:3001/api/v1/fuzz_pedals'))
        break;
      case "delay":
        dispatch(a.makePedalApiCall('http://localhost:3001/api/v1/delay_pedals'))
        break;
      default:
        break;
    }
  }

  function searchPedals(val) {
    dispatch(a.makePedalApiCall(`http://localhost:3001/api/v1/search?name=${val}`))
  }


  if(error) {
    return <p>Error: {error.message}</p>;
  } else if (isLoading) {
    return (
    <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
    )
  } else {
    return (
      <React.Fragment>
        <Layout>
          <Sider
              style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
                backgroundColor: 'white'
              }}
            >
            <div className="categories-title" style={{textAlign: 'center', marginTop: 80}}>Categories</div>
            <Search
              placeholder="Filter by Name"
              onSearch={value => searchPedals(value)}
              style={{ width: 175, margin:10 }}
            />
            <Menu  mode="inline" defaultSelectedKeys={['0']}>
              <Menu.Item key="0" onClick={() => getPedalsByCategory("all")}>
                All Pedals
              </Menu.Item>
              <Menu.Item key="1" onClick={() => getPedalsByCategory("overdrive")}>
                Overdrive
              </Menu.Item>
              <Menu.Item key="2" onClick={() => getPedalsByCategory("distortion")}>
                Distortion
              </Menu.Item>
              <Menu.Item key="3" onClick={() => getPedalsByCategory("fuzz")}>
                Fuzz
              </Menu.Item>
              <Menu.Item key="4" onClick={() => getPedalsByCategory("delay")}>
                Delay
              </Menu.Item>
              <Menu.Item key="5">
                Modulation
              </Menu.Item>
              <Menu.Item key="6">
                Reverb
              </Menu.Item>
              <Menu.Item key="7">
                Compression
              </Menu.Item>
              <Menu.Item key="8">
                EQ
              </Menu.Item>
              <Menu.Item key="9">
                Pitch
              </Menu.Item>
              <Menu.Item key="10">
                Other
              </Menu.Item>
            </Menu>
          </Sider>
        
          <Layout style={{ marginLeft: 200 }}>
            <Header style={{ padding: 0, marginTop: 100, backgroundColor: 'white'}}>
              <h1>Available Pedals</h1>
            </Header>
            <Content style={{ margin: '24px 16px 0', overflow: 'initial'}}>
              <div style={{ padding: 24, textAlign: 'center'}}>
                <div className="row">
                  {pedals.map((pedal, index) => (
                    <div className="column">
                      <div className="pedal-item">
                        <Image key={pedal.id} id={pedal.id} src={pedal.image_url} width="250px" alt="pedal" thumbnail/>
                        <div className="pedal-name">{pedal.name}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Content>
          </Layout>
        </Layout>
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
