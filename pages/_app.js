import React from 'react';
import App, { Container } from 'next/app';
//import Sider from '../components/Sider';
//import Header from '../components/Header';
// import '../styles/style.css';
import 'antd/dist/antd.min.css';



class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      // <Container>
		
				<Component {...pageProps} />
			
      // </Container>
    );
  }
}

export default MyApp;