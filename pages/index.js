import { Component } from 'react';
import Head from 'next/head';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Link from 'next/link';

// import layout HOC
import withLayout from '../components/withLayout';


class Index extends Component {
   

   render() {
      return(
         <Row>
            <Head>
               <title>Unomeal - Your food</title>
               <link rel="icon" href="/favicon.png" />
            </Head>
            <Col span={24} style={{padding: 50}}>
               <h1>This is stores index page</h1>
               <Link href="/home"><a>HOME</a></Link>
            </Col>
         </Row>
      )
   }
}

export default Index;