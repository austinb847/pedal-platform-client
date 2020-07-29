import React, {useEffect} from 'react'
import { connect } from "react-redux";
import * as a from "./../actions";
import { Table} from 'antd';
import Spinner from 'react-bootstrap/Spinner'

function InventoryTable(props) {
  const { error, isLoading, pedals } = props.apiResponse;
  const { dispatch } = props;

  useEffect(() => {
    dispatch(a.makePedalApiCall('http://localhost:3001/api/v1/pedals'));
    return () => {};
  }, []);


  const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="#">{text}</a>,
  }, {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  }, {
    title: 'Brand',
    dataIndex: 'brand',
    key: 'brand',
  },{
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity',
  },{
    title: 'Featured',
    dataIndex: 'featured',
    key: 'featured',
  },{
    title: 'Kind',
    dataIndex: 'kind',
    key: 'kind',
  },{
    title: 'Category',
    dataIndex: 'category',
    key: 'category',
  },{
    title: 'Country of Origin',
    dataIndex: 'country_origin',
    key: 'country_origin',
  },{
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        <a href="#">Edit </a> | 
        <a href="#"> Delete</a>
      </span>
    ),
  }];
  
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
    <div>
      <Table columns={columns} dataSource={pedals}/>
    </div>
  )
  }
}

const mapStateToProps = (state) => {
  return {
    apiResponse: state.getPedalsResponse
  }
}


export default connect(mapStateToProps)(InventoryTable)
