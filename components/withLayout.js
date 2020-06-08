import React, { Component } from 'react';
import Layout from 'antd/lib/layout';
import Sider from './Sider';
// import Navigation from './Navigation';
import HeadItems from './Header';


const { Content, Header, Footer } = Layout;

function withLayout(BaseComponent) {
  class App extends Component {
    
    render() {
      return (
        <Layout style={{ minHeight: '100vh' }}>
          <Sider />
          <Layout style={{height: '100%'}}>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'end'}}>
              <HeadItems />
            </Header>
            <Content style={{ padding: '78px 10px 10px 10px', height: '100%' }}>
              <BaseComponent {...this.props} />
            </Content>
            <Footer >
              <h2>Join our partnarship program for restaurants and independent chefs</h2>
            </Footer>
          </Layout>
        </Layout>
      );
    }
  
  }

  return App;
}

export default withLayout;