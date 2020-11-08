import {  } from 'react';
import Row from 'ui/row';
import Col from 'ui/col';
import Avatar from 'ui/avatar';
import { ShopOutlined, ShoppingCartOutlined } from '@ant-design/icons';

export default function StoreHeader() {

  return (
    <Row gutter={8} style={{margin: 0, padding: 0, height: '100%'}}>
      <Col span={12} style={{
        display: 'flex',
        flexFlow: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}>
        <Avatar size="large" shape="square" style={{background: '#000'}}>
          <ShopOutlined />
        </Avatar>
        <div className="store-props">
          <span><b>Long store name</b></span>
          <span>Long store address</span>
        </div>
      </Col>
      <Col span={12} style={{
        textAlign: 'right',
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'flex-end',
        justifyContent: 'center'
      }}>
        <div className="store-info">
          <h3>(535) 512 873</h3>
          <span><b style={{color: 'green'}}>Open -</b> Closes at 10:00PM</span>
        </div>
      </Col>
      <style jsx>{`
        div.store-props {
          padding: 10px 10px 10px 15px;
        }
        div.store-props > span {
          padding: 0;
          margin: 0;
          display: block;
          line-height: 15px;
        }
        div.store-info > h3 {
          margin: 0;
          margin-bottom: 20px;
          padding: 0;
          line-height: 0px;
          font-weight: bolder;
          font-size: .9rem;
        }
        div.store-info > span {
          padding: 0;
          margin: 0;
          display: block;
          line-height: 0;
        }
      `}</style>
    </Row>
  )

}