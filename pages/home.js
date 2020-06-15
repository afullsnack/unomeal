import { Component } from 'react';
import Head from 'next/head';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Carousel from 'antd/lib/carousel';
import {GithubOutlined, GitlabOutlined, InstagramOutlined, TwitterOutlined, PlusOutlined} from '@ant-design/icons';
import Card from 'antd/lib/card';
import Avatar from 'antd/lib/avatar';
import Button from 'antd/lib/button';


// import layout HOC
import withLayout from '../components/withLayout';

function SlideOneImg(props) {
   return (
      <div style={{
         width: '100%',
         height: '280px',
         display: 'flex',
         flexFlow: 'column',
         alignContent: 'center',
         justifyContent: 'end',
         backgroundImage: "url('"+props.src+"')",
         backgroundPosition: 'center',
         backgroundRepeat: 'no-repeat',
         backgroundSize: 'cover',
         borderRadius: 4
      }}>
         <div style={{
            padding: 15,
            backgroundColor: "rgba(0,0,0, .45)",
            borderRadius: '0 0 4px 4px'
         }}><h3 style={{color: 'white'}}>{props.title}</h3></div>
      </div>
   )
}

class Home extends Component {

   render() {
      return(
         <>
            <Row style={{padding: 0, margin: 0, height: '100%'}}>
               <Col xs={{span: 24}} sm={{span: 24}} style={{height: '100%'}}>
                  <Carousel style={{height: '100%'}} draggable dots={false} autoplay lazyLoad>
                     <div>
                        <SlideOneImg src="/local/egusi-soup-img.jpg" title="Local Delicacies" />
                     </div>
                     <div>
                        <SlideOneImg src="/rice/chinese-fried-rice.jpg" title="Staple Delight" />
                     </div>
                     <div>
                        <SlideOneImg src="/sides/peppered-gizzard.jpg" title="Side Takeouts" />
                     </div>
                  </Carousel>
               </Col>
            </Row>
            <Row style={{padding: 0, margin: 0, marginTop: 20, height: '100%'}}>
               <Col xs={{span: 24}} sm={{span: 24}} style={{height: '100%'}}>
                  <div style={{
                     width: '100%',
                     padding: 20,
                     display: 'flex',
                     flexFlow: 'row',
                     alignItems: 'center',
                     justifyContent: 'space-around'
                  }}>
                     <div style={{textAlign: 'center'}}>
                        <GitlabOutlined style={{color: '#ff5900', fontSize: 40, marginBottom: 6}} />
                        <h3 style={{color: '#ff5900', fontWeight: 'bolder'}}>Snacks</h3>
                     </div>
                     <div style={{textAlign: 'center'}}>
                        <GithubOutlined style={{color: '#ff5900', fontSize: 40, marginBottom: 6}}/>
                        <h3 style={{color: '#ff5900', fontWeight: 'bolder'}}>Local</h3>
                     </div>
                     <div style={{textAlign: 'center'}}>
                        <InstagramOutlined style={{color: '#ff5900', fontSize: 40, marginBottom: 6}}/>
                        <h3 style={{color: '#ff5900', fontWeight: 'bolder'}}>Wings</h3>
                     </div>
                     <div style={{textAlign: 'center'}}>
                        <TwitterOutlined style={{color: '#ff5900', fontSize: 40, marginBottom: 6}}/>
                        <h3 style={{color: '#ff5900', fontWeight: 'bolder'}}>Drinks</h3>
                     </div>
                  </div>
               </Col>
            </Row>
            <Row style={{padding: 0, margin: '20px 0', height: '100%'}}>
               <Col xs={{span: 24}} sm={{span: 24}} style={{height: '100%'}}>
                  <div style={{
                     width: '100%',
                     height: '280px',
                     padding: '0 20px',
                     display: 'flex',
                     flexFlow: 'column',
                     alignContent: 'center',
                     justifyContent: 'center',
                     backgroundImage: "url('/rice/white-rice-&-bangastew.jpg')",
                     backgroundPosition: '0 -100px',
                     backgroundRepeat: 'no-repeat',
                     backgroundSize: 'contain',
                     borderBottom: '3px dashed #ff5900'
                  }}>
                     <div style={{
                        display: 'flex',
                        flexFlow: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        height: 150,
                        backgroundColor: 'white'
                     }}>
                        <div style={{flex: 1}}></div>
                        <div style={{flex: 1}}>
                           <h3>Top Offer Here</h3>
                        </div>
                     </div>
                  </div>
               </Col>
            </Row>
            <Row gutter={[8, 8]} style={{padding: 0, margin: 0, marginTop: 20, height: '100%'}}>
               <Col xs={{span: 12}} sm={{span: 12}} md={{span: 8}} lg={{span: 6}} style={{height: '100%'}}>
                  <Card hoverable bordered cover={<img src="/rice/fried-rice.jpg" width="100%" height="150px"  />}>
                     <Card.Meta title="Product Name" description="N 5200" avatar={<Button type="primary" size="large" style={{backgroundColor: '#ff5900'}} shape="circle"><PlusOutlined style={{}} /></Button>} />
                  </Card>
               </Col>
               <Col xs={{span: 12}} sm={{span: 12}} md={{span: 8}} lg={{span: 6}} style={{height: '100%'}}>
                  <Card hoverable bordered cover={<img src="/local/egusi-soup-img.jpg" width="100%" height="100%"  />}>
                     <Card.Meta title="Product Name" description="N 5200" avatar={<Button type="primary" size="large" style={{backgroundColor: '#ff5900'}} shape="circle"><PlusOutlined style={{}} /></Button>} />
                  </Card>
               </Col>
               <Col xs={{span: 12}} sm={{span: 12}} md={{span: 8}} lg={{span: 6}} style={{height: '100%'}}>
                  <Card hoverable bordered cover={<img src="/rice/fried-rice.jpg" width="100%"  />}>
                     <Card.Meta title="Product Name" description="N 5200" avatar={<Button type="primary" size="large" style={{backgroundColor: '#ff5900'}} shape="circle"><PlusOutlined style={{}} /></Button>} />
                  </Card>
               </Col>
               <Col xs={{span: 12}} sm={{span: 12}} md={{span: 8}} lg={{span: 6}} style={{height: '100%'}}>
                  <Card hoverable bordered cover={<img src="/rice/fried-rice.jpg" width="100%"  />}>
                     <Card.Meta title="Product Name" description="N 5200" avatar={<Button type="primary" size="large" style={{backgroundColor: '#ff5900'}} shape="circle"><PlusOutlined style={{}} /></Button>} />
                  </Card>
               </Col>
            </Row>
         </>
      )
   }
}

export default withLayout(Home);