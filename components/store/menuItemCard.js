import {} from "react";
import Card from "ui/card";
import Image from "next/image";
// import AntImage from 'ui/image';
import Avatar from "ui/avatar";

export default function MenuItemCard() {
  return (
    <Card hoverable>
      <Card.Meta
        // avatar={
        //   <Avatar
        //     shape="square"
        //     size={80}
        //     src="/sides/spicy-chicken-wings.png"
        //   />
        // }
        title="Item name"
        description={<span style={{textOverflow: "ellipsis"}}>Long item description of the whole dish, as in the ingredients and shit<br/><b>$79.99</b></span>}
      />
    </Card>
  );
}
