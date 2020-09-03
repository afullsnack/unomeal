import { Component } from "react";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import Card from "antd/lib/card";
import Button from "antd/lib/button";
import Tabs from "antd/lib/tabs";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

import withLayout from "../../components/withLayout";
import { server } from "../../lib/config";

const { TabPane } = Tabs;
const contentList = {
  tab1: (itemData) => <div></div>,
  tab2: <p>Tab 2 content</p>,
  tab3: <p>Tab 3 content</p>,
};

class Item extends Component {
  state = {
    itemData: { imgUrl: null },
    isLoading: true,
    qty: 1,
  };

  componentDidMount() {
    if (this.props.itemData !== "undefined" || this.props.itemData !== null) {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { itemData, addToCart } = this.props;
    // console.log(itemData);

    return (
      <>
        <Card
          // hoverable
          loading={this.state.isLoading}
          cover={<img src={itemData.imgUrl} />}
          actions={[
            <Button
              type="link"
              size="default"
              style={{ color: "#ff5900" }}
              onClick={(e) =>
                this.setState((state) =>
                  state.qty === 1 ? { qty: 1 } : { qty: state.qty - 1 }
                )
              }
            >
              <MinusOutlined />
            </Button>,
            <Button
              type="link"
              size="default"
              style={{ color: "#ff5900" }}
              onClick={() =>
                addToCart(itemData, this.state.qty, itemData._store)
              }
            >
              ADD {this.state.qty} TO CART
            </Button>,
            <Button
              type="link"
              size="default"
              style={{ color: "#ff5900" }}
              onClick={() => this.setState({ qty: this.state.qty + 1 })}
            >
              <PlusOutlined />
            </Button>,
          ]}
          style={{
            textAlign: "center",
            boxShadow: [
              "7px 7px 12px 0 rgba(0,0,0,.10)",
              "-7px -7px 12px 0 rgba(255,255,255,1)",
            ],
            backgroundColor: "transparent",
          }}
          bodyStyle={{ backgroundColor: "transparent", minHeight: 300 }}
        >
          <Tabs>
            <TabPane tab="tab1" key="tab1">
              <h1 style={{ fontSize: 24, fontWeight: "bolder" }}>
                {itemData.name}
              </h1>
              <p>
                Lorem ipsum dollor sit amet, Lorem ipsum dollor sit amet, Lorem
                ipsum dollor sit amet, Lorem ipsum dollor sit amet, Lorem ipsum
                dollor sit amet, Lorem ipsum dollor sit amet
              </p>
              <br />
              <h3
                style={{
                  fontSize: 18,
                  color: "#ff5900",
                  fontWeight: "bold",
                }}
              >
                {itemData.price == "variation"
                  ? itemData.variation[0].price
                  : itemData.price}
              </h3>
            </TabPane>
            <TabPane tab="tab2" key="tab2">
              <p>Content of tab 2</p>
            </TabPane>
            <TabPane tab="tab3" key="tab3">
              <p>Content of tab 3</p>
            </TabPane>
          </Tabs>
        </Card>
        <style jsx global>{`
          .ant-card-actions {
            background-color: transparent;
            border-top: 1px solid rgba(0, 0, 0, 0.13);
          }
        `}</style>
      </>
    );
  }
}

export default withLayout(Item);

// fetch server data and populate page props with it.
export async function getServerSideProps({ params }) {
  const { item_id } = params;

  // fetch the product data and return to the function
  const res = await fetch(`${server}/api/item?itemId=${item_id}`);
  const itemData = await res.json();
  // console.log(itemData);

  return {
    props: {
      itemData,
    },
  };
}
