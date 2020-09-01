import React, { Component } from "react";
import Card from "antd/lib/card";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import Button from "antd/lib/button";
import Avatar from "antd/lib/avatar";
import Divider from "antd/lib/divider";

function ReviewCard({ childre, props }) {
  return (
    <Card>
      <Card.Meta
        avatar={<Avatar shape="cirular" size={55} src="/favicon.png" />}
        style={{
          marginBottom: 10,
        }}
        title="Users Name"
        description="4.2 - Pretty Awesome"
      />
      <Divider orientation="horizontal" />
      <p>
        Lorem ipsum dolor sit amet, this is a samle review information from a
        user that have dropped a review for this store
      </p>
      <Divider orientation="horizontal" />
      <div
        style={{
          display: "flex",
          flexFlow: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Avatar
          shape="square"
          style={{ flex: 1, margin: "0 5px", height: "auto" }}
          src="/favicon.png"
        />
        <Avatar
          shape="square"
          style={{ flex: 1, margin: "0 5px", height: "auto" }}
          src="/favicon.png"
        />
        <Avatar
          shape="square"
          style={{ flex: 1, margin: "0 5px", height: "auto" }}
          src="/favicon.png"
        />
        <Avatar
          shape="square"
          style={{ flex: 1, margin: "0 5px", height: "auto" }}
          src="/favicon.png"
        />
      </div>
    </Card>
  );
}

export default ReviewCard;
