import React, { Component } from "react";
import Card from "antd/lib/card";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import Button from "antd/lib/button";
import Avatar from "antd/lib/avatar";
import Divider from "antd/lib/divider";
import Rate from "antd/lib/rate";

function ReviewCard({ rating, review, username, featured }) {
  return (
    <Card
      actions={
        review == ""
          ? [
              <Button type="link" style={{ color: "#ff5900" }}>
                ADD REVIEW
              </Button>,
            ]
          : null
      }
    >
      <Card.Meta
        avatar={<Avatar shape="cirular" size={65} src="/favicon.png" />}
        style={{
          marginBottom: 10,
        }}
        title={username == "" ? "No reviewer" : username}
        description={<Rate defaultValue={rating} allowHalf disabled />}
      />
      <Divider orientation="horizontal" />
      <p>
        {review == "" ? "No reviews yet, be the first to add one." : review}
      </p>
      <Divider orientation="horizontal" />
      {review == "" ? null : (
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
      )}
    </Card>
  );
}

export default ReviewCard;
