import {} from "react";
import Card from "ui/card";
import Image from "next/image";
import Link from 'next/link';
import Avatar from "ui/avatar";

export default function MenuItemCard({ showModal }) {
  return (
    <Link passHref href="/stores/cafe/menu/#dish-1/#" as="/stores/cafe/menu/#dish-1/#">
      <Card hoverable onClick={() => showModal(true)}>
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
    </Link>
  );
}
