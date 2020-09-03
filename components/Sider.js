import React, { Component } from "react";
import Layout from "antd/lib/layout";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CloseOutlined,
  MenuOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import { getViewportState, watchViewport } from "tornis";

import Button from "antd/lib/button";

import Nav from "./Navigation";

const { Sider } = Layout;

class MySider extends Component {
  state = {
    collapsed: true,
  };

  onCollapse = () => {
    this.setState({ collapsed: !this.state.collapsed });

    // watch viewport width
    // let vpState = getViewportState();
    // console.log(this.state.collapsed, vpState);
  };

  render() {
    // const controls = useAnimation();
    const variants = {
      collapsed: { height: 60 },
      full: { height: 170 },
    };

    // this.state.collapsed? controls.start("collapsed") : controls.start("full");
    return (
      <Sider
        collapsedWidth={0}
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
        zeroWidthTriggerStyle={{
          top: 10,
          backgroundColor: "transparent",
        }}
        style={{
          width: "auto",
          height: "100%",
          display: "fixed",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          zIndex: 100,
          backgroundColor: "white",
          // flexFlow: 'column',
          // justifyContent: 'center',
          // alignItems: 'center',
          // padding: '0px 120px 0px 120px'
        }}
      >
        <Link href="/" passHref>
          <motion.div
            animate={this.state.collapsed ? "collapsed" : "full"}
            variants={variants}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              // fontSize: 23,
              // width: 100,
              height: this.state.collapsed ? 60 : 170,
              backgroundImage: 'url("/favicon.png")',
              backgroundPosition: "contain",
              backgroundSize: "100%",
              backgroundRepeat: "no-repeat",
              borderRadius: "2%",
              margin: this.state.collapsed
                ? "30px 12px 0 12px"
                : "30px 25px 0 25px",
              paddingBottom: 0,
              // float: 'left',
              textAlign: "center",
            }}
          ></motion.div>
        </Link>
        {/* <Search /> */}
        <Nav />

        <div
          style={{
            padding: 20,
            backgroundColor: "white",
            border: "1px solid #ff5900",
            borderRadius: 5,
            color: "#ff5900",
            margin: "5%",
          }}
        >
          <span>Join Our Program</span>
          <h3 style={{ color: "#ff5900", margin: 0, padding: 0 }}>
            SIGN UP <ArrowRightOutlined />
          </h3>
        </div>
        <div
          style={{
            padding: 20,
            backgroundColor: "#ff5900",
            // border: "1px solid lightblue",
            borderRadius: 5,
            color: "white",
            margin: "5%",
          }}
        >
          <span>Have an Account?</span>
          <h3 style={{ color: "white", margin: 0, padding: 0 }}>
            LOG IN <ArrowRightOutlined />
          </h3>
        </div>
      </Sider>
    );
  }
}

export default MySider;
