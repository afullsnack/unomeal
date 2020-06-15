import { Component } from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import withLayout from '../../components/withLayout';
import Card from 'antd/lib/card';
import Button from 'antd/lib/button';
import { ArrowRightOutlined, InstagramOutlined, TwitterOutlined, FacebookOutlined } from '@ant-design/icons';
import Divider from 'antd/lib/divider';

import { motion } from 'framer-motion';
import Link from 'next/link';

class Stores extends Component {

   render() {
      return (
         <>
            <Row style={{ width: '100%', marginBottom: 32}}>
               <Col xs={{span: 24}} sm={{span: 24}}>
                  <Card>
                     <h1 style={{
                        fontSize: '2rem'
                     }}>Menu's from the best kitchens and chefs in town</h1>
                     <a href="#">Check out our social media pages <ArrowRightOutlined/></a>
                     <Divider orientation="center" ></Divider>
                     <Button type="ghost" style={{
                        textAlign: 'left',
                        width: 120
                     }}>Join Us
                        <motion.i animate={{marginLeft: [12, 3, 12]}} initial={{marginLeft: 3}} transition={{loop: Infinity, repeatDelay: 1.65}}>
                              <ArrowRightOutlined style={{ padding: 0, marginLeft: 20}} />
                        </motion.i>
                     </Button>
                     <Button icon={<InstagramOutlined />} type="primary" shape="circle" style={{marginLeft: 10}} />
                     <Button icon={<TwitterOutlined />} type="primary" shape="circle" style={{marginLeft: 10}} />
                     <Button icon={<FacebookOutlined />} type="primary" shape="circle" style={{marginLeft: 10}} />
                  </Card>
               </Col>
            </Row>
            <h1>Most Popular</h1>
            <Row gutter={[8, 8]} style={{ width: '100%', margin: '0 0 32px 0', padding: 0}} id="most-popular">
               <Col xs={{span: 12}} sm={{span: 12}}>
                  <Link passHref href="/stores/mommy-cafe">
                     <Card bodyStyle={{padding: 15}} hoverable cover={<img src="/rice/chinese-fried-rice.jpg" height="100%" width="100%" />}>
                        <Card.Meta title="Store Name" description="Greate store with a nice menu" />
                     </Card>
                  </Link>
               </Col>
               <Col xs={{span: 12}} sm={{span: 12}}>
                  <Link passHref href="/stores/mommy-cafe">
                     <Card bodyStyle={{padding: 15}} hoverable cover={<img src="/rice/chinese-fried-rice.jpg" height="100%" width="100%" />}>
                        <Card.Meta title="Store Name" description="Greate store with a nice menu" />
                     </Card>
                  </Link>
               </Col>
               <Col xs={{span: 12}} sm={{span: 12}}>
                  <Link passHref href="/stores/mommy-cafe">
                     <Card bodyStyle={{padding: 15}} hoverable cover={<img src="/rice/chinese-fried-rice.jpg" height="100%" width="100%" />}>
                        <Card.Meta title="Store Name" description="Greate store with a nice menu" />
                     </Card>
                  </Link>
               </Col>
               <Col xs={{span: 12}} sm={{span: 12}}>
                  <Link passHref href="/stores/mommy-cafe">
                     <Card bodyStyle={{padding: 15}} hoverable cover={<img src="/rice/chinese-fried-rice.jpg" height="100%" width="100%" />}>
                        <Card.Meta title="Store Name" description="Greate store with a nice menu" />
                     </Card>
                  </Link>
               </Col>
            </Row>
            <h1>Meal Deals</h1>
            <Row gutter={8}>
               <Col xs={{span: 12}} sm={{span: 12}}>
                  <Card cover={<img src="/rice/fried-rice.jpg" height={260} />}>
                     <Card.Meta title="25% OFF" />
                  </Card>
               </Col>
               <Col xs={{span: 12}} sm={{span: 12}}>
                  <Card cover={<img src="/rice/fried-rice.jpg" height={260} />}>
                     <Card.Meta title="25% OFF" />
                  </Card>
               </Col>
            </Row>
         </>
      )
   }
}

export default withLayout(Stores);