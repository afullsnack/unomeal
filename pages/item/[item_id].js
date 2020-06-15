import { Component } from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Card from 'antd/lib/card';
import Button from 'antd/lib/button';
import Tabs from 'antd/lib/tabs';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

import Router from 'next/router';


class Item extends Component {

   state = {
      itemData: {imgUrl: null},
      isLoading: true
   }

   async componentDidMount() {
      // const pathname = Router.pathname;
      // pathname.lastIndexOf('/')
      // console.log(pathname);
      const item_id = '_001';
      const itemData = await fetch("/api/item/_001").then(r => r.json());
      this.setState({ itemData });
   }


   render() {
      const { itemData } = this.state;
      // console.log(itemData);

      return (
         <>
            <Row gutter={[8, 8]} style={{ width: '100%', margin: 0, padding: 0 }}>
               <Col xs={{ span: 0 }} sm={{ span: 2 }} md={{ span: 8 }} lg={{ span: 8 }}></Col>
               <Col xs={{ span: 24 }} sm={{ span: 20 }} md={{ span: 8 }} lg={{ span: 8 }}>
                  <Card loading={this.state.isLoading} cover={<img src={itemData.imgUrl} />} actions={[<MinusOutlined />, <Button>ADD {} TO CART</Button>, <PlusOutlined />]}>

                  </Card>
               </Col>
               <Col xs={{ span: 0 }} sm={{ span: 2 }} md={{ span: 8 }} lg={{ span: 8 }}></Col>
            </Row>
         </>
      )
   }
}

export default Item;

// export async function getServerSideProps({ params }) {
//    const { item_id } = params;


//    // fetch the product data and return to the function
//    const itemData = await fetch('/api/item');
//    console.log(itemData.json());

//    return {
//       props: {
//          itemData
//       }
//    }
// }