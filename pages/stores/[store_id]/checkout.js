import { useState } from 'react';
import Row from 'ui/row';
import Col from 'ui/col';
import Button from 'ui/button';
import Radio from 'ui/radio';
import Input from 'ui/input';
import Card from 'ui/card';

import { CreditCardOutlined } from '@ant-design/icons';

import withStoreLayout from "components/store/withStoreLayout";

const { Search } = Input;


function storeCheckout() {
  const [tipValue, setTipValue] = useState('0');

  const tipOptions = [
    { label: '#0', value: '0' },
    { label: '#100', value: '1' },
    { label: '#200', value: '2' },
    { label: '#300', value: '3' },
    { label: '#400', value: '4' },
    { label: '#500', value: '5' },
  ];

  const onTipChange = e => {
    setTipValue(e.target.value);
  }

  return(
    <>
      <Row gutter={[8, 8]} style={{ margin: 0, padding: "2% 10%" }}>
        <Col span={16}>
          <Row gutter={[16, 8]} style={{margin: 0, padding: 0, width: '100%'}}>
            <Col span={24} style={{marginBottom: 30}}>
              <h3>Add a Tip</h3>
              <Radio.Group
                options={tipOptions}
                onChange={onTipChange}
                value={tipValue}
                optionType="button"
                buttonStyle="outline"
                size="large"
                style={{width: '100%'}}
              />
            </Col>
            <Col span={12} style={{}}>
              <h3>Apply Gift Card</h3>
              {/* <Input placeholder="Enter Gift Card #" addonAfter={<Button type="primary" disabled>Apply</Button>} /> */}
              <Search
                placeholder="Enter Gift Card #"
                enterButton="Apply"
                size="large"
                loading={false}
                // suffix={}
                // onSearch={}
              />
            </Col>
            <Col span={12} style={{}}>
              <h3>Have a Promo Code?</h3>
              <Search
                placeholder="Enter Promo Code"
                enterButton="Apply"
                size="large"
                loading={false}
                // suffix={}
                // onSearch={}
              />
            </Col>
            <Col span={24} style={{marginTop: 30}}>
              <h3>Contact Info & Payment</h3>
              <Input.Group size="large" style={{marginBottom: 10}}>
                <Row gutter={[16, 8]}>
                  <Col span={12}>
                    <Input placeholder="First Name" />
                  </Col>
                  <Col span={12}>
                    <Input placeholder="Last Name" />
                  </Col>
                  <Col span={12}>
                    <Input placeholder="Phone No." />
                  </Col>
                  <Col span={12}>
                    <Input placeholder="Email" />
                  </Col>
                </Row>
              </Input.Group>

              <Input.Group size="large" style={{marginBottom: 10, width: '100%'}} compact>
                <Input placeholder="Card Number" prefix={<CreditCardOutlined />} size="large" style={{width: '60%'}} />
                <Input placeholder="02/21" style={{width: '13%'}} />
                <Input placeholder="CVV" style={{width: '12%'}} />
                <Input placeholder="OTP" style={{width: '15%'}} />
              </Input.Group>


              <Button type="link" size="large" style={{background: '#f06543', color: '#FFF'}} block>Place Order</Button>
            </Col>
          </Row>
        </Col>
        <Col span={8}>
          <h3>Order Summery</h3>
          <Row gutter={[0,8]}>
            <Col span={24}>
              <Card>
                <span>
                  <b>Long store name</b><br/>
                  Long store address<br/>
                  <b>Pick-up @1:05PM</b><br/>
                </span>
                <a href="#">Change</a>
              </Card>
            </Col>
            <Col span={24}>
              <Card title="2 Items in Your Order" bodyStyle={{padding: 0}}>
                <Card type="inner" bordered={true} style={{borderLeft: 'none', borderRight: 'none', marginBottom: 10}}>
                  <h4>Chicken Quesadea</h4>
                </Card>
                <Card type="inner" bordered={false} style={{borderBottom: '1px solid grey'}}>
                  <h4>Coconut sparkling water</h4>
                </Card>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default withStoreLayout(storeCheckout);