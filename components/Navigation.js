import React, { Component } from 'react';
import Menu from 'antd/lib/menu';
import Link from 'next/link';
import Router from 'next/router';
import { HomeOutlined, ShopOutlined, GiftOutlined, SettingOutlined} from '@ant-design/icons';
import Badge from 'antd/lib/badge';



class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      path: '/home'
    }
  }

  componentDidMount() {
    // console.log("The current path", Router.pathname);
    this.setState({ path: Router.pathname });
  }

  render() {
    
    return (
      <Menu
        mode="inline"
        theme="light"
        defaultSelectedKeys={[this.state.path]}
        selectedKeys={[this.state.path]}
        style={{
          height: 'auto'
        }}
        onSelect={
          ({item, key, selected}) => {
            this.setState({ path: key });
            Router.push(key);
            // Router.prefetch(key);
          }
        }
      >
        <Menu.Item key="/home">
          <HomeOutlined />
          <span>Home</span>
        </Menu.Item>
        <Menu.Item key="/stores">
          <ShopOutlined />
          <span>Stores</span>
        </Menu.Item>
        <Menu.Item key="/order">
          <GiftOutlined />
          <Badge dot style={{ right: -5}}>
            <span>Order</span>
          </Badge>
        </Menu.Item>
        <Menu.Item key="/settings">
          <SettingOutlined />
          <span>Settings</span>
        </Menu.Item>
      </Menu>
    )
  }
}

export default Nav;