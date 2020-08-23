import React, { Component } from 'react';
import Layout from 'antd/lib/layout';
import Sider from './Sider';
import { watchViewport, unwatchViewport } from 'tornis';
import 'isomorphic-fetch';
import HeadItems from './Header';


const { Content, Header, Footer } = Layout;

function withLayout(BaseComponent) {
  class App extends Component {

    state = {
      scrollTop: null,
      sizeX: null,
      sizeY: null,
      cartTotalQty: 0
    }

    updateValues = ({ size, scroll, mouse }) => {
      if (size.changed){
        // console.log("The size changed ");
        // console.log(size.x, size.y);
        this.setState({sizeX: size.x, sizeY: size.y});
      }
  
      if(scroll.changed) {
        // console.log("The scroll chanaged: \n");
        // console.log(scroll.top, scroll.bottom);
        this.setState({ scrollTop: scroll.top });
      }
  
      // if(mouse.changed) {
      //    console.log("The mouse change: \n");
      //    console.log(mouse.x, mouse.y);
      // }

    }

    addToCart = async (item, qty, store_id) => {
      // e.preventDefault();
      // console.log("ITEM", item);
      try {
   
         const price = item.price === 'variation'? item.variation[0].price : item.price;
         const resp = await fetch("/api/cart", {
            method: "POST",
            headers: {
               'Content-Type': 'application/json'
            },
            credentials: 'same-origin',
            body: JSON.stringify({
               name: item.name,
               price,
               variation: item.variation,
               qty,
               totalPrice: price,
               options: null,
               prodId: item.id,
               store_id
            })
         }).then(response => response.json());
         this.setState({ cartTotalQty: resp.totalQty });
         
         console.log("Added to cart", resp);

      } catch(err) {
         console.log(err.message || err.toString());
      }

    }

    async componentDidMount() {
      watchViewport(this.updateValues);
      console.log("tornis watching vp started");

      const resp = await fetch("/api/cart").then(r => r.json());
      this.setState({ cartTotalQty: resp.totalQty });
    }

    componentWillUnmount() {
      unwatchViewport(this.updateValues);
      console.log("Tornis unwatches vp changes");
    }
    
    render() {
      return (
        <Layout style={{ minHeight: '100vh' }}>
          <Sider />
          <Layout style={{height: '100%'}}>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'end', backgroundColor: '#ff5900'}}>
              <HeadItems cartTotalQty={this.state.cartTotalQty} />
            </Header>
            <Content style={{ padding: '78px 10px 10px 10px', height: '100%', backgroundColor: '#EEEEEE'}}>
              <BaseComponent {...this.props} {...this.state} addToCart={this.addToCart} />
            </Content>
            <Footer >
              <h2>Join our partnarship program for restaurants and independent chefs</h2>
            </Footer>
          </Layout>
        </Layout>
      );
    }
  
  }

  return App;
}

export default withLayout;