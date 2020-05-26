import React, { Component } from 'react';
import Layout from 'antd/lib/layout';
import Sider from './Sider';
import Navigation from './Navigation';

const { Content, Header } = Layout;

function withLayout(BaseComponent) {
  class App extends Component {
    
    render() {
      return (
        <Layout style={{ minHeight: '100vh' }}>
          <Sider />
          <Layout style={{height: '100%'}}>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%'}} />
            <Content style={{ padding: '78px 15px 15px 15px', height: '100%' }}>
              <BaseComponent />
            </Content>
          </Layout>
        </Layout>
      );
    }
  
  }

  App.getInitialProps = (ctx) => {
    if(BaseComponent.getInitialProps) {
      return BaseComponent.getInitialProps(ctx);
    }

    return {};
  }

  return App;
}

export default withLayout;