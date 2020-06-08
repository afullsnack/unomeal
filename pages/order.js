import { Component } from 'react';
import withLayout from '../components/withLayout'
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import List from 'antd/lib/list';
import Card from 'antd/lib/card';
import Tabs from 'antd/lib/tabs';
import Link from 'next/link';

const { TabPane } = Tabs;



class Order extends Component {


   render() {
      return (
         <>
            <Row gutter={8} style={{margin: 0, padding: 0, width: '100%'}}>
               <Col span={24}>
                  <Tabs defaultActiveKey="1" type="line">
                     <TabPane key="1" tab="Current">
                        <h1>This is the tab for the current Order</h1>
                     </TabPane>
                     <TabPane key="2" tab="History">
                        <h1>This is the tab for order History</h1>
                     </TabPane>
                  </Tabs>
               </Col>
            </Row>
            <Row style={{margin: 0, padding: 0, width: '100%'}}>

            </Row>
         </>
      )
   }
}

export default withLayout(Order);