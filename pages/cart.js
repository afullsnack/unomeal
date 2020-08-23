import { Component } from 'react';
import withLayout from '../components/withLayout'
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import List from 'antd/lib/list';
import Card from 'antd/lib/card';
import Link from 'next/link';
import 'isomorphic-fetch';
import cart from './api/cart';

const items = [
   {
      "name": "Product name",
      "price": 2300,
      "options": "Mini text, mini text, really mini text"
   },
   {
      "name": "Product name",
      "price": 2300,
      "options": "Mini text, mini text, really mini text"
   },
   {
      "name": "Product name",
      "price": 2300,
      "options": "Mini text, mini text, really mini text"
   },
   {
      "name": "Product name",
      "price": 2300,
      "options": "Mini text, mini text, really mini text"
   },
];


class Cart extends Component {
   state = {
      items: null,
      isLoading: true,
      totalPrice: 0
   };

   async  componentDidMount(){
      const res = await fetch("/api/cart").then(response => response.json());
      this.setState({ items: res.cartItems, isLoading: false, totalPrice: res.totalPrice });

      console.log(res);
   }


   render() {
      return (
         <>
            <Row gutter={8} style={{margin: 0, padding: 0, width: '100%'}}>
               <Col span={24}>
                  <Card loading={this.state.isLoading} extra={<p style={{color: '#ff5900', margin: 0, padding: 0}}>{this.state.totalPrice}</p>} title="Items In Cart" headStyle={{color: '#ff5900', borderColor: '#ff5900'}}>
                     <List
                        dataSource={this.state.items}
                        itemLayout="vertical"
                        // bordered
                        size="small"
                        footer={<div style={{textAlign: 'right'}}><Link href="/stores" passHref><a style={{color: '#ff5900'}}>Add more items</a></Link></div>}
                        renderItem={item => (
                           <List.Item  extra={item.qty + "x " +item.price}>
                              <List.Item.Meta title={item.item.name} description={item.storeId} />
                           </List.Item>
                        )}
                      />
                  </Card>
               </Col>
            </Row>
            <Row style={{margin: 0, padding: 0, width: '100%'}}>

            </Row>
         </>
      )
   }
}

export default withLayout(Cart);