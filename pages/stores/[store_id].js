import { Component } from "react";
import withLayout from "../../components/withLayout";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import Card from "antd/lib/card";
import Button from "antd/lib/button";
import {
  ShareAltOutlined,
  StarOutlined,
  StarFilled,
  HeartOutlined,
  HeartFilled,
  EnvironmentOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import Tooltip from "antd/lib/tooltip";
import Collapse from "antd/lib/collapse";

import "isomorphic-fetch";
import { applySession } from "next-session";
import MenuSlider from "../../components/MenuSlider";
import ReviewCard from "../../components/ReviewCard";
import ReviewBox from "../../components/ReviewBox";

const { Panel } = Collapse;

const options = {
  name: "unomeal.sid",
  secret: "sessionSecret",
  cookie: {
    httpOnly: true,
    maxAge: 14 * 24 * 60 * 60, // expires in 14 days
  },
};

const products = [
  {
    id: "_001",
    name: "Product one",
    price: "variation",
    imgUrl: "/sides/peppered-gizzard.jpg",
    variation: [
      { size: "large", price: 2300 },
      { size: "medium", price: 4200 },
      { size: "small", price: 5900 },
    ],
    _store: "product-store",
    _category: "product-category",
    _options: "product-options",
    _reviews: "product-reviews",
  },
  {
    id: "_002",
    name: "Product two",
    price: "variation",
    imgUrl: "/sides/peppered-gizzard.jpg",
    variation: [
      { size: "large", price: 2300 },
      { size: "medium", price: 4200 },
      { size: "small", price: 5900 },
    ],
    _store: "product-store",
    _category: "product-category",
    _options: "product-options",
    _reviews: "product-reviews",
  },
  {
    id: "_003",
    name: "Product three",
    price: 3200,
    imgUrl: "/sides/peppered-gizzard.jpg",
    variation: null,
    _store: "product-store",
    _category: "product-category",
    _options: "product-options",
    _reviews: "product-reviews",
  },
  {
    id: "_004",
    name: "Product four",
    price: 1650,
    imgUrl: "/sides/peppered-gizzard.jpg",
    variation: null,
    _store: "product-store",
    _category: "product-category",
    _options: "product-options",
    _reviews: "product-reviews",
  },
];

class SingleStore extends Component {
  state = {
    reviewState: false,
    followState: false,
  };

  // async componentDidMount() {
  //    const resp = await fetch("/api/items", { method: "POST", headers: {'Content-Type': 'application/json'}, body: JSON.stringify({ name: "John Doe" }) }).then(response => response.json());
  //    console.log("TEST", resp);
  // }

  render() {
    const { store_id } = this.props;

    return (
      <>
        <Row style={{ width: "100%", marginBottom: 32 }}>
          <Col xs={{ span: 24 }} sm={{ span: 24 }}>
            <Card cover={<img src="/sides/bbq-chicken-wings.png" />}>
              <Card.Meta title="Store name" style={{ fontWeight: "bolder" }} />
            </Card>
          </Col>
        </Row>
        <Row style={{ width: "100%", marginBottom: 32 }}>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            style={{
              display: "flex",
              flexFlow: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <Button
                shape="circle"
                size="large"
                type="link"
                style={{ backgroundColor: "#ff5900" }}
              >
                <ShareAltOutlined style={{ color: "#fff" }} />
              </Button>
              <h3 style={{ margin: 0, paddding: 0, fontWeight: "bolder" }}>
                Shares
              </h3>
              <h4
                style={{
                  margin: 0,
                  paddding: 0,
                  color: "#ff5900",
                  fontWeight: "bold",
                }}
              >
                102
              </h4>
            </div>
            <div style={{ textAlign: "center" }}>
              <Button
                shape="circle"
                size="large"
                type="link"
                style={{ backgroundColor: "#ff5900" }}
                onClick={() =>
                  this.setState({ reviewState: !this.state.reviewState })
                }
              >
                {this.state.reviewState ? (
                  <Tooltip title="Remove review">
                    <StarFilled style={{ color: "#fff" }} />
                  </Tooltip>
                ) : (
                  <Tooltip title="Leave review">
                    <StarOutlined style={{ color: "#fff" }} />
                  </Tooltip>
                )}
              </Button>
              <h3 style={{ margin: 0, paddding: 0, fontWeight: "bolder" }}>
                Reviews
              </h3>
              <h4
                style={{
                  margin: 0,
                  paddding: 0,
                  color: "#ff5900",
                  fontWeight: "bold",
                }}
              >
                4.5
              </h4>
            </div>
            <div style={{ textAlign: "center" }}>
              <Button
                shape="circle"
                size="large"
                type="link"
                style={{ backgroundColor: "#ff5900" }}
                onClick={() =>
                  this.setState({ followState: !this.state.followState })
                }
              >
                {this.state.followState ? (
                  <Tooltip title="Unfollow">
                    <HeartFilled style={{ color: "#fff" }} />
                  </Tooltip>
                ) : (
                  <Tooltip title="Follow">
                    <HeartOutlined style={{ color: "#fff" }} />
                  </Tooltip>
                )}
              </Button>
              <h3 style={{ margin: 0, paddding: 0, fontWeight: "bolder" }}>
                Follows
              </h3>
              <h4
                style={{
                  margin: 0,
                  paddding: 0,
                  color: "#ff5900",
                  fontWeight: "bold",
                }}
              >
                89
              </h4>
            </div>
          </Col>
        </Row>
        <Row style={{ width: "100%", marginBottom: 32 }}>
          <Col xs={{ span: 24 }} sm={{ span: 24 }}>
            <Card
              bodyStyle={{
                display: "flex",
                flexFlow: "row",
                alignItems: "space-between",
                justifyContent: "center",
              }}
            >
              <Col span={18}>
                <h1>
                  Store location and a way point icon with a mini google map as
                  background
                </h1>
              </Col>
              <Col
                span={6}
                style={{
                  display: "flex",
                  // flexFlow: 'row',
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <EnvironmentOutlined
                  style={{ fontSize: 25, color: "#ff5900" }}
                />
              </Col>
            </Card>
          </Col>
        </Row>
        <h1>Menu</h1>
        <Row
          gutter={[6, 6]}
          style={{ width: "100%", margin: "0 0 32px 0", padding: 0 }}
        >
          <Col xs={{ span: 24 }} sm={{ span: 24 }}>
            <Collapse
              accordion
              defaultActiveKey={["1"]}
              bordered={false}
              ghost
              expandIconPosition={"right"}
            >
              <Panel
                header="Category one"
                key="1"
                className="custom-collapse-panel"
              >
                <MenuSlider products={products} />
              </Panel>
              <Panel
                header="Category two"
                key="2"
                className="custom-collapse-panel"
              >
                <MenuSlider products={products} />
              </Panel>
              <Panel
                header="Category three"
                key="3"
                className="custom-collapse-panel"
              >
                <MenuSlider products={products} />
              </Panel>
            </Collapse>
          </Col>
        </Row>
        <h1>Reviews</h1>
        <Row
          gutter={[6, 6]}
          style={{ width: "100%", margin: "0 0 32px 0", padding: 0 }}
        >
          <Col span={24}>
            <ReviewCard />
            <ReviewBox />
          </Col>
        </Row>
      </>
    );
  }
}

export default withLayout(SingleStore);

export async function getServerSideProps({ req, res, params }) {
  // fetch store data and send to page props
  const { store_id } = params;
  // await applySession(req, res, options);

  console.log(params);

  return { props: { store_id } };
}
