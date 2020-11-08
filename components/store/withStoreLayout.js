import { useState } from 'react';
import Row from 'ui/row';
import Col from 'ui/col';
import Layout from 'ui/layout';

import StoreHeader from 'components/store/storeHeader';


const { Header, Content } = Layout;

// HOC for the single store layout
export default function withStoreLayout(Component) {

  return (props) => {

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Header style={{ padding: '5px 10%', minHeight: 64, height: 'auto', background: '#FFFFFF'}}>
          <StoreHeader />
        </Header>
        <Content style={{ background: '#FFF', position: 'relative', padding: '0 5px', }}>
          <Component {...props} />
        </Content>
      </Layout>
    )
    
  }

}