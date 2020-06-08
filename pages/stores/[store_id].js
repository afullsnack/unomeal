import { Component } from 'react';
import withLayout from '../../components/withLayout';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Card from 'antd/lib/card';
import Button from 'antd/lib/button';
import { HomeOutlined, SearchOutlined, PieChartOutlined, ArrowLeftOutlined, CommentOutlined } from '@ant-design/icons';
import Link from 'next/link';



class SingleStore extends Component {


   render() {
      
      const { data } = this.props;
      
      return (
         <>
            <Row style={{ width: '100%', marginBottom: 32 }}>
               <Col xs={{span: 24}} sm={{span: 24}}>
                  <Card cover={<img src="/sides/bbq-chicken-wings.png" />}>
                     <Card.Meta title="Store name" style={{fontWeight: 'bolder'}} />
                  </Card>
               </Col>
            </Row>
            <Row style={{ width: '100%', marginBottom: 32 }}>
               <Col xs={{span: 24}} sm={{span: 24}} style={{
                  display: 'flex',
                  flexFlow: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-around'
               }}>
                  <Link href="/stores" as="/stores" passHref>
                     <div style={{ textAlign: 'center'}}>
                        <Button shape="circle" size="large" type="primary">
                           <ArrowLeftOutlined />
                        </Button>
                     </div>
                  </Link>
                  <div style={{ textAlign: 'center'}}>
                     <Button shape="circle" size="large" type="primary">
                        <SearchOutlined />
                     </Button>
                  </div>
                  <div style={{ textAlign: 'center'}}>
                     <Button shape="circle" size="large" type="primary">
                        <CommentOutlined />
                     </Button>
                  </div>
               </Col>
            </Row>
            <Row style={{ width: '100%', marginBottom: 32 }}>
               <Col xs={{span:24}} sm={{span: 24}}>
                  <Card>
                     <h1>Store location and a way point icon with a mini google map as background</h1>
                  </Card>
               </Col>
            </Row>
            <h1>Menu</h1>
            <Row gutter={[6, 6]} style={{width: '100%', margin: '0 0 32px 0', padding: 0}}>
               <Col xs={{span: 12}} sm={{span: 12}}>
                  <Card cover={<img src="/sides/peppered-gizzard.jpg" />}>
                     <Card.Meta title="Menu dish title" description="2340" />
                  </Card>
               </Col>
               <Col xs={{span: 12}} sm={{span: 12}}>
                  <Card cover={<img src="/sides/peppered-gizzard.jpg" />}>
                     <Card.Meta title="Menu dish title" description="2340" />
                  </Card>
               </Col>
               <Col xs={{span: 12}} sm={{span: 12}}>
                  <Card cover={<img src="/sides/peppered-gizzard.jpg" />}>
                     <Card.Meta title="Menu dish title" description="2340" />
                  </Card>
               </Col>
               <Col xs={{span: 12}} sm={{span: 12}}>
                  <Card cover={<img src="/sides/peppered-gizzard.jpg" />}>
                     <Card.Meta title="Menu dish title" description="2340" />
                  </Card>
               </Col>
            </Row>
         </>
      )
   }
}



export default withLayout(SingleStore);



export async function getServerSideProps({params, query}){
   // fetch store data and send to page props
   const { store_id } = params;
   console.log(params);

   return {props: {data: store_id}};
}