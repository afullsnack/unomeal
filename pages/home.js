import { Component } from "react";
import Head from "next/head";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import Carousel from "antd/lib/carousel";
import { GithubOutlined, GitlabOutlined, GiftFilled } from "@ant-design/icons";
import Card from "antd/lib/card";
import Avatar from "antd/lib/avatar";
import Button from "antd/lib/button";

// import layout HOC
import withLayout from "../components/withLayout";

function SlideOneImg(props) {
  return (
    <div
      style={{
        width: "100%",
        height: "280px",
        display: "flex",
        flexFlow: "column",
        alignContent: "center",
        justifyContent: "end",
        backgroundImage: "url('" + props.src + "')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        borderRadius: 4,
      }}
    >
      <div
        style={{
          padding: 15,
          backgroundColor: "rgba(0,0,0, .45)",
          borderRadius: "0 0 4px 4px",
        }}
      >
        <h3 style={{ color: "white" }}>{props.title}</h3>
      </div>
    </div>
  );
}

class Home extends Component {
  render() {
    return (
      <>
        <Row style={{ padding: 0, margin: 0, width: "100%" }}>
          <Col xs={{ span: 24 }} sm={{ span: 24 }} style={{ height: "100%" }}>
            <Carousel
              style={{ height: "100%" }}
              draggable
              dots={false}
              autoplay
              lazyLoad
            >
              <div>
                <SlideOneImg
                  src="/local/egusi-soup-img.jpg"
                  title="Local Delicacies"
                />
              </div>
              <div>
                <SlideOneImg
                  src="/rice/chinese-fried-rice.jpg"
                  title="Staple Delight"
                />
              </div>
              <div>
                <SlideOneImg
                  src="/sides/peppered-gizzard.jpg"
                  title="Side Takeouts"
                />
              </div>
            </Carousel>
          </Col>
        </Row>
        <Row style={{ padding: 0, margin: 0, marginTop: 40, width: "100%" }}>
          <Col xs={{ span: 24 }} sm={{ span: 24 }} style={{ height: "100%" }}>
            <div
              style={{
                width: "100%",
                padding: 20,
                display: "flex",
                flexFlow: "row",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <div
                style={{
                  textAlign: "center",
                  padding: "10px 26px",
                  border: "1px solid #ff5900",
                  borderRadius: 10,
                  cursor: "pointer",
                }}
              >
                <GitlabOutlined
                  style={{ color: "#ff5900", fontSize: 30, marginBottom: 6 }}
                />
                <h3
                  style={{
                    color: "#ff5900",
                    fontWeight: "bolder",
                    margin: 0,
                    padding: 0,
                  }}
                >
                  READY TO EAT
                </h3>
              </div>
              <div
                style={{
                  textAlign: "center",
                  padding: "10px 24px",
                  border: "1px solid #ff5900",
                  borderRadius: 10,
                  backgroundColor: "#ff5900",
                  cursor: "pointer",
                }}
              >
                <GithubOutlined
                  style={{ color: "#FFF", fontSize: 30, marginBottom: 6 }}
                />
                <h3
                  style={{
                    color: "#FFF",
                    fontWeight: "bolder",
                    margin: 0,
                    padding: 0,
                  }}
                >
                  MADE TO ORDER
                </h3>
              </div>
            </div>
          </Col>
        </Row>
        <Row
          gutter={[8, 64]}
          style={{
            padding: 0,
            marginTop: 20,
            width: "100%",
            marginBottom: 80,
          }}
        >
          <Col xs={{ span: 24 }} lg={{ span: 12 }} style={{ margin: 0 }}>
            <Card
              bodyStyle={{ padding: 0 }}
              cover={
                <div
                  style={{
                    width: "100%",
                    height: "280px",
                    padding: "0 20px",
                    display: "flex",
                    flexFlow: "column",
                    alignContent: "center",
                    justifyContent: "end",
                    backgroundImage: "url('/rice/white-rice-&-bangastew.jpg')",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    // borderBottom: "3px dashed #ff5900",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexFlow: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100%",
                      padding: 20,
                      // height: 150,
                      backgroundColor: "white",
                      border: "2px solid #ff5900",
                      borderRadius: 100,
                      position: "relative",
                      bottom: -34,
                      left: 0,
                      right: 0,
                    }}
                  >
                    <div
                      style={{
                        flex: 1,
                      }}
                    >
                      <GiftFilled
                        style={{
                          fontSize: 75,
                          position: "absolute",
                          top: -30,
                          left: "19%",
                          color: "#ff5600",
                        }}
                      />
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3>Top Offer Here</h3>
                    </div>
                  </div>
                </div>
              }
            ></Card>
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 12 }} style={{ margin: 0 }}>
            <Card
              bodyStyle={{ padding: 0 }}
              cover={
                <div
                  style={{
                    width: "100%",
                    height: "280px",
                    padding: "0 20px",
                    display: "flex",
                    flexFlow: "column",
                    alignContent: "center",
                    justifyContent: "end",
                    backgroundImage: "url('/rice/white-rice-&-bangastew.jpg')",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    // borderBottom: "3px dashed #ff5900",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexFlow: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100%",
                      padding: 20,
                      // height: 150,
                      backgroundColor: "white",
                      border: "2px solid #ff5900",
                      borderRadius: 100,
                      position: "relative",
                      bottom: -34,
                      left: 0,
                      right: 0,
                    }}
                  >
                    <div style={{ flex: 1 }}>
                      <GiftFilled
                        style={{
                          fontSize: 75,
                          position: "absolute",
                          top: -30,
                          left: "19%",
                          color: "#ff5600",
                        }}
                      />
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3>Top Offer Here</h3>
                    </div>
                  </div>
                </div>
              }
            ></Card>
          </Col>
        </Row>
        <Row
          gutter={[8, 8]}
          style={{ padding: 0, margin: 0, marginTop: 20, width: "100%" }}
        >
          <Col
            xs={{ span: 12 }}
            sm={{ span: 12 }}
            md={{ span: 8 }}
            lg={{ span: 6 }}
            style={{ height: "100%" }}
          >
            <Card
              hoverable
              bordered
              cover={
                <img src="/rice/fried-rice.jpg" width="100%" height="130px" />
              }
            >
              <Card.Meta title="Product Name" description="N 5200" />
            </Card>
          </Col>
          <Col
            xs={{ span: 12 }}
            sm={{ span: 12 }}
            md={{ span: 8 }}
            lg={{ span: 6 }}
            style={{ height: "100%" }}
          >
            <Card
              hoverable
              bordered
              cover={
                <img
                  src="/local/egusi-soup-img.jpg"
                  width="100%"
                  height="130px"
                />
              }
            >
              <Card.Meta title="Product Name" description="N 5200" />
            </Card>
          </Col>
          <Col
            xs={{ span: 12 }}
            sm={{ span: 12 }}
            md={{ span: 8 }}
            lg={{ span: 6 }}
            style={{ height: "100%" }}
          >
            <Card
              hoverable
              bordered
              cover={
                <img src="/rice/fried-rice.jpg" width="100%" height="130px" />
              }
            >
              <Card.Meta title="Product Name" description="N 5200" />
            </Card>
          </Col>
          <Col
            xs={{ span: 12 }}
            sm={{ span: 12 }}
            md={{ span: 8 }}
            lg={{ span: 6 }}
            style={{ height: "100%" }}
          >
            <Card
              hoverable
              bordered
              cover={
                <img src="/rice/fried-rice.jpg" width="100%" height="130px" />
              }
            >
              <Card.Meta title="Product Name" description="N 5200" />
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}

export default withLayout(Home);
