import React, { Component } from 'react';
import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon';
import Link from 'next/link';
import Router from 'next/router';

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
          <Icon type="home" style={{ color: 'white' }} />
          <span>Home</span>
        </Menu.Item>
        <Menu.Item key="/stores">
          <Icon type="clock-circle" style={{ color: 'white' }} />
          <span>Stores</span>
        </Menu.Item>
        <Menu.Item key="/order">
          {/* Add a custom fireworks icon */}
          <Icon type="star" style={{ color: 'white' }} />
          <span>Order</span>
        </Menu.Item>
        <Menu.Item key="/settings">
          <Icon type="arrow-up" style={{ color: 'white' }} />
          <span>Settings</span>
        </Menu.Item>
      </Menu>
    )
  }
}

export default Nav;