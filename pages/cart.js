import { Component } from 'react';
import withLayout from '../components/withLayout'
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import List from 'antd/lib/list';
import Card from 'antd/lib/card';
import Link from 'next/link';
import 'isomorphic-fetch';

const items = [
   {
      "title": "Product name",
      "price": 2300,
      "options": "Mini text, mini text, really mini text"
   },
   {
      "title": "Product name",
      "price": 2300,
      "options": "Mini text, mini text, really mini text"
   },
   {
      "title": "Product name",
      "price": 2300,
      "options": "Mini text, mini text, really mini text"
   },
   {
      "title": "Product name",
      "price": 2300,
      "options": "Mini text, mini text, really mini text"
   },
];


class Cart extends Component {

  async  componentDidMount(){
      const res = await fetch("/api/cart").then(response => response.json());
      console.log(res);
   }


   render() {
      return (
         <>
            <Row gutter={8} style={{margin: 0, padding: 0, width: '100%'}}>
               <Col span={24}>
                  <Card title="Mama Oriental" headStyle={{backgroundColor: '#656', color: 'white'}}>
                     <List
                        dataSource={items}
                        itemLayout="vertical"
                        // bordered
                        size="small"
                        footer={<div style={{textAlign: 'right'}}><Link href="/stores" passHref><a>Add more items</a></Link></div>}
                        renderItem={item => (
                           <List.Item  extra={item.price}>
                              <List.Item.Meta title={item.title} description={item.options} />
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