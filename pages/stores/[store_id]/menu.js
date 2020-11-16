import { useState } from "react";
import Row from "ui/row";
import Col from "ui/col";
import Button from "ui/button";
import Empty from 'ui/empty';
import Modal from "ui/modal";
import Tabs from "ui/tabs";
import Card from "ui/card";
import Affix from "ui/affix";
import Space from "ui/space";

import { ShoppingOutlined, ShoppingTwoTone } from "@ant-design/icons";

import ScrollableAnchor, { configureAnchors } from "react-scrollable-anchor";
import withStoreLayout from "components/store/withStoreLayout";
import MenuItemCard from "components/store/menuItemCard";
import CartControls from "components/store/cartControls";

const { TabPane } = Tabs;

function storeMenu() {
  let array = ["12", "21", "23", "32"];
  configureAnchors({ offset: -200, scrollDuration: 400 });
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Row gutter={[8, 0]} style={{ margin: 0, padding: "0 10%" }}>
        <Col span={24} style={{ background: "#FFF", width: "100%" }}>
          <Affix offsetTop={64} style={{ width: "100%" }}>
            <div style={{ background: "#FFF", width: "100%", height: "100%" }}>
              <ul className="menu-nav-container">
                <li className="menu-nav-item">
                  <a href="#dish-1">Mega Dish 1</a>
                </li>
                <li className="menu-nav-item">
                  <a href="#dish-2">Mega Dish 2</a>
                </li>
                <li className="menu-nav-item">
                  <a href="#dish-3">Mega Dish 3</a>
                </li>
                <li className="menu-nav-item">
                  <a href="#dish-4">Mega Dish 4</a>
                </li>
              </ul>
            </div>
          </Affix>
        </Col>
        <Col span={16}>
          <ScrollableAnchor id={"dish-1"}>
            <Row
              gutter={[8, 8]}
              style={{ margin: 0, padding: "20px 0", width: "100%" }}
            >
              <Col span={24}>
                <h1>Mega Dish 1</h1>
              </Col>
              {array.map((a, i) => (
                <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                  <MenuItemCard key={i} showModal={setVisible} />
                </Col>
              ))}
            </Row>
          </ScrollableAnchor>
          <ScrollableAnchor id={"dish-2"}>
            <Row
              gutter={[8, 8]}
              style={{ margin: 0, padding: "20px 0", width: "100%" }}
            >
              <Col span={24}>
                <h1>Mega Dish 2</h1>
              </Col>
              {array.map((a, i) => (
                <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                  <MenuItemCard key={i} showModal={setVisible} />
                </Col>
              ))}
            </Row>
          </ScrollableAnchor>
          <ScrollableAnchor id={"dish-3"}>
            <Row
              gutter={[8, 8]}
              style={{ margin: 0, padding: "20px 0", width: "100%" }}
            >
              <Col span={24}>
                <h1>Mega Dish 3</h1>
              </Col>
              {array.map((a, i) => (
                <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                  <MenuItemCard key={i} showModal={setVisible} />
                </Col>
              ))}
            </Row>
          </ScrollableAnchor>
          <ScrollableAnchor id={"dish-4"}>
            <Row
              gutter={[8, 8]}
              style={{ margin: 0, padding: "20px 0", width: "100%" }}
            >
              <Col span={24}>
                <h1>Mega Dish 4</h1>
              </Col>
              {array.map((a, i) => (
                <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                  <MenuItemCard key={i} showModal={setVisible} />
                </Col>
              ))}
            </Row>
          </ScrollableAnchor>
        </Col>
        <Col span={8}>
          <Affix offsetTop={115}>
            <Card
              bodyStyle={{
                minHeight: 300,
                display: "flex",
                flexFlow: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
              bordered
              actions={[
                <Button
                  type="link"
                  block
                  style={{
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  Checkout
                  <b>$0.00</b>
                </Button>,
              ]}
            >
              {/* <ShoppingOutlined style={{ fontSize: 45 }} />
              <span>Your cart is empty choose an item to get started</span> */}
              <Empty image={<ShoppingTwoTone twoToneColor="#f06543" style={{ fontSize: 60 }} />} description="Your cart is empty. Choose an item to get started" />
            </Card>
          </Affix>
        </Col>
      </Row>
      <Modal
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={'40%'}
        bodyStyle={{
          height: '80vh',
          overflow: 'scroll',
        }}
        footer={<CartControls />}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
      <style jsx global>{`
        ul.menu-nav-container {
          list-style: none;
          list-style-type: none;
          display: inline;
          padding: 0;
        }

        li.menu-nav-item {
          list-style: none;
          list-style-type: none;
          display: inline-block;
          padding: 10px;
        }
        li.menu-nav-item:active {
          border-bottom: 2px solid orange;
        }
        h1 {
          margin-left: 20px;
        }

        .ant-card-actions {
          background: #f06543;
        }
        .ant-modal-body::-webkit-scrollbar {
          display: none;
        }
        .ant-modal-body {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .ant-modal-footer {
          text-align: center;
        }
      `}</style>
    </>
  );
}

export default withStoreLayout(storeMenu);
