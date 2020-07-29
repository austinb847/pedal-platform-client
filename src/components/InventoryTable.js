import React, {useEffect} from 'react'
import { connect } from "react-redux";
import * as a from "./../actions";
import { Table} from 'antd';

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
  }, 
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },{
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity',
  },{
    title: 'Featured',
    dataIndex: 'featured',
    key: 'featured',
  },{
    title: 'Image Url',
    dataIndex: 'image_url',
    key: 'image_url',
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
        <a href="#">Edit</a>
        <span className="ant-divider" />
        <a href="#">Delete</a>
        <span className="ant-divider" />
      </span>
    ),
  }];
  
  return (
    <div>
      <Table columns={columns} dataSource={props.pedals}/>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    apiResponse: state.getPedalsResponse
  }
}


export default connect(mapStateToProps)(InventoryTable)
