import React, { Component, useEffect, useState } from "react";
import Card from "antd/lib/card";
import Col from "antd/lib/col";
import Row from "antd/lib/row";
import Button from "antd/lib/button";
import Avatar from "antd/lib/avatar";
import Input from "antd/lib/input";
import Divider from "antd/lib/divider";

const { TextArea } = Input;

function ReviewBox() {
  const [value, setValue] = useState("");
  return (
    <Card
      actions={[
        <Button
          type="link"
          style={{ color: "#ff5900" }}
          onClick={() => alert(value)}
        >
          ADD COMMENT
        </Button>,
      ]}
    >
      <Card.Meta
        title="User Name"
        description="Rating"
        avatar={<Avatar shape="cirular" size={65} src="/favicon.png" />}
        style={{ marginBottom: 10 }}
      />
      <Divider orientation="horizontal" />
      <TextArea
        allowClear
        rows={4}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Divider orientation="horizontal" />
      <Button type="link" block>
        FEATURE YOUR FAVORITE DISHES
      </Button>
    </Card>
  );
}

export default ReviewBox;
