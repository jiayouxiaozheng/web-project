import React, { Component } from 'react';
import logo from './logo.svg';
import './style/App.css';

import { Layout, Menu, Icon } from 'antd';
import ContentPage from "./component/contentPage"
import screenfull from 'screenfull';
const { Header, Sider, Content ,Footer } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class App extends Component {
  state={
    collapsed:false,
    current:""
  }
  
  //折叠
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  
  //菜单选中
  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  }
  
  //全屏
  screenFull= () => {
     if (screenfull.enabled) {
        screenfull.request();
     }
  }

  render() {
    return (
      <div id="App">
            <Layout>
                      <Sider
                        trigger={null}
                        collapsible
                        collapsed={this.state.collapsed}
                      >
                            <div className="logo" >
                                  文捷网
                            </div>
                            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                              <Menu.Item key="1">
                                <Icon type="user" />
                                <span>nav 1</span>
                              </Menu.Item>
                              <Menu.Item key="2">
                                <Icon type="video-camera" />
                                <span>nav 2</span>
                              </Menu.Item>
                              <Menu.Item key="3">
                                <Icon type="upload" />
                                <span>nav 3</span>
                              </Menu.Item>
                            </Menu>
                      </Sider>
                      <Layout>
                              <Header className="ant-header" style={{ background: '#fff', padding: 0 }}>
                                        <div className="ant-header-left">
                                              <Icon
                                                className="trigger"
                                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                                onClick={this.toggle}
                                              />
                                        </div>
                                        <div className="ant-header-right">
                                              <Menu
                                                onClick={this.handleClick}
                                                selectedKeys={[this.state.current]}
                                                mode="horizontal"
                                                style={{
                                                  lineHeight:"64px"
                                                }}
                                              >
                                                <Menu.Item key="full" onClick={this.screenFull} >
                                                    <Icon type="arrows-alt" onClick={this.screenFull} />
                                                </Menu.Item>
                                                <SubMenu title={<span><Icon type="user" />郑文杰</span>}>
                                                  <MenuItemGroup title="">
                                                    <Menu.Item key="setting:1">个人信息</Menu.Item>
                                                    <Menu.Item key="setting:2">退出</Menu.Item>
                                                  </MenuItemGroup>
                                                </SubMenu>
                                              </Menu>
                                        </div>
                              </Header>
                              <Content className="ant-content" style={{ padding: 24, background: '#fff', minHeight: 280 }}>
                                        <ContentPage />
                              </Content>
                              <Footer>
                                       文捷网版权
                              </Footer>
                      </Layout>
            </Layout>
      </div>
    );
  }
}

export default App;
