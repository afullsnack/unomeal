import React, { Component } from 'react';
import Layout from 'antd/lib/layout';
import Link from 'next/link';
import {motion, useAnimation} from 'framer-motion';

import Nav from './Navigation';

const { Sider } = Layout;


class MySider extends Component {
  
  state = {
    collapsed: true
  };

  onCollapse = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  render() {
    // const controls = useAnimation();
    const variants = {
      collapsed: {height: 60},
      full: {height: 170}
    };

    // this.state.collapsed? controls.start("collapsed") : controls.start("full");
    return (
      <Sider
        collapsedWidth={0}
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
        style={{
          width: 'auto',
          height: 'inherit',
          display: 'fixed',
          backgroundColor: 'white'
          // flexFlow: 'column',
          // justifyContent: 'center',
          // alignItems: 'center',
          // padding: '0px 120px 0px 120px'
      }}>
        <Link href="/" passHref>
          <motion.div animate={this.state.collapsed? "collapsed":"full"} variants={variants} style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            // fontSize: 23,
            // width: 100,
            height: this.state.collapsed? 60 : 170,
            backgroundImage: 'url("/favicon.png")',
            backgroundPosition: 'contain',
            backgroundSize: '100%',
            backgroundRepeat: 'no-repeat',
            borderRadius: '2%',
            margin:this.state.collapsed? '30px 12px 0 12px': '30px 25px 0 25px',
            paddingBottom: 0,
            // float: 'left',
            textAlign: 'center'
          }}></motion.div>
        </Link>
        {/* <Search /> */}
        <Nav />
      </Sider>
    )
  }
}

export default MySider;