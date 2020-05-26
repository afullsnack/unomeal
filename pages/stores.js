import { Component } from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import withLayout from '../components/withLayout';


class Stores extends Component {

   render() {
      return (
         <Row>
            <Col span={24}>
               <h1>This is the stores page, for users who want ot order from a store</h1>
            </Col>
         </Row>
      )
   }
}

export default withLayout(Stores);