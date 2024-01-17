// "use client";
import { Badge, Drawer, Table } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { getShoppingCard } from "@/utils/route";
import styles from "./shoppingCard.module.css";
import { useState } from "react";

const ShoppingCard = () => {
  const [cardDrawerOpen, setCardDrawerOpen] = useState(false);
  //   const records = await getShoppingCard();

  return (
    <div>
      <Badge count={7} onClick={() => setCardDrawerOpen(true)}>
        <ShoppingCartOutlined className={styles.shoppingCardIcon} />
      </Badge>
      <Drawer
        title="Your Card"
        open={cardDrawerOpen}
        onClose={() => setCardDrawerOpen(false)}
      >
        <Table
          columns={[
            {
              title: "Title",
              dataIndex: "title",
            },
            {
              title: "Price",
              dataIndex: "price",
            },
            {
              title: "Quantity",
              dataIndex: "quantity",
            },
            {
              title: "Total",
              dataIndex: "total",
            },
          ]}
        ></Table>
      </Drawer>
    </div>
  );
};

export default ShoppingCard;
