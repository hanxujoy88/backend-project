import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import 'antd/dist/antd.css'
import '../App.css';
import AppAntdTable from '../components/AppAntdTable';

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;

class AppAntdTest extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
        text: this.props.text,
        display: false,
        ContentShow: "Content-hide"
    }
  }
  render() {
    return (
      <div className="react-app-content">
        <Layout>
           <Header>
             <div className="logo">
                <Menu
                  theme="dark"
                  mode="horizontal"
                  defaultSelectedKeys={['2']}
                  style={{ lineHeight: '64px' }}
                >
                  <Menu.Item key="1">nav 1</Menu.Item>
                  <Menu.Item key="2">nav 2</Menu.Item>
                  <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
             </div>
           </Header>
           <Layout>
              <Sider width={200} style={{ background: '#fff' }}>
                      <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                      >
                        <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
                          <Menu.Item key="1">option1</Menu.Item>
                          <Menu.Item key="2">option2</Menu.Item>
                          <Menu.Item key="3">option3</Menu.Item>
                          <Menu.Item key="4">option4</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
                          <Menu.Item key="5">option5</Menu.Item>
                          <Menu.Item key="6">option6</Menu.Item>
                          <Menu.Item key="7">option7</Menu.Item>
                          <Menu.Item key="8">option8</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
                          <Menu.Item key="9">option9</Menu.Item>
                          <Menu.Item key="10">option10</Menu.Item>
                          <Menu.Item key="11">option11</Menu.Item>
                          <Menu.Item key="12">option12</Menu.Item>
                        </SubMenu>
                      </Menu>
              </Sider>
            <Layout>
              <Breadcrumb style={{ padding: '0 50px', textAlign: 'left' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <Content style={{ padding: '0 50px', textAlign: 'left' }}>
                <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                 <AppAntdTable></AppAntdTable>
                </div>
            </Content>
            </Layout>  
          </Layout>
            <Footer>
              Ant Design @ 2018 Created by hanxu
            </Footer>
            <span onClick={this.handleMouseClick.bind(this)}>{this.state.text}</span>
            <p className={this.state.ContentShow}>我是否显示</p>
          </Layout>
      </div>
    );
  }

  componentWillMount() {
    if(this.state.display) {
       this.setState({
          ContentShow: "Content-show"
       })
    }
    console.log("willMount");
  }

  componentDidMount() {
    console.log("DidMount");
  }


  handleMouseClick(e) {
    this.setState({
       text: '你好世界',
       ContentShow: "Content-show"
    })
  }
}

export default AppAntdTest;
