import React, { Component } from 'react';
import { Table, Icon, Divider } from 'antd';
import 'antd/dist/antd.css'

const dataSource = [{
  key: '1',
  name: '胡彦斌',
  age: 32,
  address: '西湖区湖底公园1号'
}, {
  key: '2',
  name: '胡彦祖',
  age: 42,
  address: '西湖区湖底公园1号'
}];

const columns = [{
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '年龄',
  dataIndex: 'age',
  key: 'age',
}, {
  title: '住址',
  dataIndex: 'address',
  key: 'address',
}];

class AppAntdTable extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      
    }
  }
  render() {
    return (
      <div className="Content-Table">
          <Table dataSource={dataSource} columns={columns} />
      </div>
    );
  }
  
  componentWillMount() {
    console.log("willMount");
  }

  componentDidMount() {
    console.log("DidMount");
  }
}

export default AppAntdTable;
