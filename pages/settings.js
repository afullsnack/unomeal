import { Component } from 'react';
import withLayout from '../components/withLayout'
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';


class Settings extends Component {


   render() {
      return (
         <Row gutter={8} style={{margin: 0, padding: 0, width: '100%'}}>
            <Col span={24}>
               <h1>User settings page</h1>
            </Col>
         </Row>
      )
   }
}

export default withLayout(Settings);