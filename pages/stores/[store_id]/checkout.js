import {  } from 'react';
import Row from 'ui/row';
import Col from 'ui/col';
import Button from 'ui/button';

import withStoreLayout from "components/store/withStoreLayout";


function storeCheckout() {

  return(
    <>
      <Row gutter={[16, 8]} style={{ margin: 0, padding: "0 10%" }}>
        <Col span={16}>
          <Row style={{margin: 0, padding: 0, width: '100%'}}>
            <Col span={24}>
              <h3>Add a Tip</h3>
            </Col>
            <Col span={12}>
              <h3>apply Gift Card</h3>
            </Col>
            <Col span={12}>
              <h3>Have a Promo Code?</h3>
            </Col>
            <Col span={24}>
              <h3>Contact Info & Payment</h3>
              <Button type="link" size="large" style={{background: '#f06543', color: '#FFF'}} block>Place Order</Button>
            </Col>
          </Row>
        </Col>
        <Col span={8}>
          <h3>Order Summery</h3>
        </Col>
      </Row>
    </>
  )
}

export default withStoreLayout(storeCheckout);