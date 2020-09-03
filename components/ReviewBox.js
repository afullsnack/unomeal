import React, { Component, useEffect, useState } from "react";
import Card from "antd/lib/card";
import Col from "antd/lib/col";
import Row from "antd/lib/row";
import Button from "antd/lib/button";
import Avatar from "antd/lib/avatar";
import Input from "antd/lib/input";
import Divider from "antd/lib/divider";
import Rate from "antd/lib/rate";

const { TextArea } = Input;

function ReviewBox() {
  const [reviewText, setReviewText] = useState("");
  const [rate, setRating] = useState(0);
  return (
    <Card
      actions={[
        <Button
          type="link"
          style={{ color: "grey" }}
          onClick={() => alert("DISCARDING REVIEW")}
        >
          DISCARD
        </Button>,
        <Button
          type="link"
          style={{ color: "#ff5900" }}
          onClick={() => alert(reviewText + " " + rate)}
        >
          ADD REVIEW
        </Button>,
      ]}
    >
      <Card.Meta
        title="User Name"
        description={
          <Rate
            defaultValue={rate}
            allowHalf
            allowClear
            onChange={(value) => setRating(value)}
          />
        }
        avatar={<Avatar shape="cirular" size={65} src="/favicon.png" />}
        style={{ marginBottom: 10 }}
      />
      <Divider orientation="horizontal" />
      <TextArea
        allowClear
        rows={4}
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
      />
      <Divider orientation="horizontal" />
      <span
        style={{
          color: "#1890ff",
          marginBottom: 10,
          display: "block",
          textAlign: "center",
        }}
      >
        Have a favorite dish from this kitchen? Add them to review
      </span>
      <Button
        type="link"
        style={{ backgroundColor: "#ff5900", color: "#FFF" }}
        block
      >
        ADD DISHES
      </Button>
    </Card>
  );
}

export default ReviewBox;
