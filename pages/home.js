import { Component } from 'react';
import Head from 'next/head';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Carousel from 'antd/lib/carousel';

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
         backgroundPosition: 'cover',
         backgroundRepeat: 'no-repeat',
         backgroundSize: '100%'
      }}>
         <div style={{
            padding: 15,
            backgroundColor: "rgba(0,0,0, .45)"
         }}><h3 style={{color: 'white',}}>{props.title}</h3></div>
      </div>
   )
}

class Home extends Component {
   

   render() {
      return(
         <Row style={{padding: 0, margin: 0, height: '100%'}}>
            <Col xs={{span: 24}} sm={{span: 24}} style={{height: '100%'}}>
               <Carousel style={{height: '100%'}} draggable dots={false} arrows autoplay>
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
      )
   }
}

export default withLayout(Home);