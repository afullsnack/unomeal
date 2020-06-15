import { Component } from 'react';
import withLayout from '../../components/withLayout';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Card from 'antd/lib/card';
import Button from 'antd/lib/button';
import { HomeOutlined, SearchOutlined, PlusOutlined, ArrowLeftOutlined, CommentOutlined } from '@ant-design/icons';
import Link from 'next/link';
import 'isomorphic-fetch';
import { applySession } from 'next-session';

const options = {
   name: 'unomeal.sid',
   secret: 'sessionSecret',
   cookie: {
     httpOnly: true,
     maxAge: 14 * 24 * 60 * 60, // expires in 14 days
   }
 };

const products = [
   {
      id: '_001',
      name: "Product one",
      price: 'variation',
      imgUrl: "/sides/peppered-gizzard.jpg",
      variation: [
         { size: 'large', price: 2300 },
         { size: 'medium', price: 4200 },
         { size: 'small', price: 5900 }
      ],
      _store: 'product-store',
      _category: 'product-category',
      _options: 'product-options',
      _reviews: 'product-reviews'
   },
   {
      id: '_002',
      name: "Product two",
      price: 'variation',
      imgUrl: "/sides/peppered-gizzard.jpg",
      variation: [
         { size: 'large', price: 2300 },
         { size: 'medium', price: 4200 },
         { size: 'small', price: 5900 }
      ],
      _store: 'product-store',
      _category: 'product-category',
      _options: 'product-options',
      _reviews: 'product-reviews'
   },
   {
      id: '_003',
      name: "Product three",
      price: 3200,
      imgUrl: "/sides/peppered-gizzard.jpg",
      variation: null,
      _store: 'product-store',
      _category: 'product-category',
      _options: 'product-options',
      _reviews: 'product-reviews'
   },
   {
      id: '_004',
      name: "Product four",
      price: 1650,
      imgUrl: "/sides/peppered-gizzard.jpg",
      variation: null,
      _store: 'product-store',
      _category: 'product-category',
      _options: 'product-options',
      _reviews: 'product-reviews'
   },
];

class SingleStore extends Component {

   

   // async componentDidMount() {
   //    const resp = await fetch("/api/items", { method: "POST", headers: {'Content-Type': 'application/json'}, body: JSON.stringify({ name: "John Doe" }) }).then(response => response.json());
   //    console.log("TEST", resp);
   // }

   render() {
      
      const { data, addToCart } = this.props;
      
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
               {
                  products.map(item => <Col key={item.id} xs={{span: 12}} sm={{span: 12}}>
                     <Link href={"/item/"+item.id} passHref>
                        <Card cover={<img src={item.imgUrl} />} hoverable>
                           {/* <h2>{item.name}</h2> */}
                           <Card.Meta
                              title={<h3 style={{margin: 0, padding: 0}}>{item.name}</h3>}
                              description={<span style={{fontSize: 18, color: '#ff5900'}}>{item.price === 'variation'? item.variation[0].price : item.price}</span>}
                              avatar={<Button
                                 size="large"
                                 style={{backgroundColor: '#ff5900'}}
                                 shape="circle"
                                 onClick={() => addToCart(item)}><PlusOutlined style={{color: 'white'}} /></Button>}
                           />
                        </Card>
                     </Link>
                  </Col>)
               }
            </Row>
         </>
      )
   }
}



export default withLayout(SingleStore);



export async function getServerSideProps({req, res, params}){
   // fetch store data and send to page props
   const { store_id } = params;
   // await applySession(req, res, options);

   console.log(params);

   return {props: {data: store_id}};
}