import React, { Component } from 'react';
import Carousel from 'antd/lib/carousel';
import Card from 'antd/lib/card';



class MenuSlider extends Component {

   render(){
      const { products } = this.props;
      return (
         <>
            <Carousel style={{height: '100%'}} draggable dots={false} autoplay lazyLoad slidesToShow={3} swipeToSlide={true} swipe={true} slidesToScroll={2}>
               {
                  products.map(item => <Card
                     key={item.id}
                     cover={<div style={{padding: '0 5px'}}><img src={item.imgUrl} height="100%" width="100%" /></div>}
                     style={{backgroundColor: '#eee'}}
                     bodyStyle={{padding: 8, textAlign: 'center'}}
                     bordered={false}
                     hoverable
                  >
                     <h3 style={{margin: 0, padding: 0}}>{item.name}</h3>
                     <h4 style={{margin: 0, padding: 0, color: '#ff5900'}}>{item.price === 'variation'? item.variation[0].price : item.price}</h4>
                  </Card>)
               }
            </Carousel>
         </>
      );
   }

}


export default MenuSlider;