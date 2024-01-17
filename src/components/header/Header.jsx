"use client";
import { Menu, Typography } from "antd";
import { HomeFilled } from "@ant-design/icons";
import Link from "next/link";
import styles from "./header.module.css";
import ShoppingCard from "../shoppingCard/ShoppingCard";

const { Title } = Typography;
const Header = () => {
  return (
    <div className={styles.contianer}>
      <Menu
        mode="horizontal"
        items={[
          {
            label: (
              <Link href="/">
                <HomeFilled />
              </Link>
            ),
            key: "home",
          },
          {
            label: "Men",
            key: "men",
            children: [
              {
                label: <Link href="/categories/mens-shirts">Mens Shirts</Link>,
                key: "mens-shirts",
              },
              {
                label: <Link href="/categories/mens-shoes">Mens Shoes</Link>,
                key: "mens-shoes",
              },
              {
                label: (
                  <Link href="/categories/mens-watches">Mens Watches</Link>
                ),
                key: "mens-watches",
              },
            ],
          },
          {
            label: "Women",
            key: "women",
            children: [
              {
                label: (
                  <Link href="/categories/womens-dresses">Womens Dresses</Link>
                ),
              },
              {
                label: <Link href="/categories/women-shoes">Womens Shoes</Link>,
                key: "women-shoes",
              },
              {
                label: (
                  <Link href="/categories/women-watches">Womens Watches</Link>
                ),
                key: "women-watches",
              },
            ],
          },
          {
            label: <Link href="/categories/fragrences">Fragrences</Link>,
            key: "fragrences",
          },
        ]}
      />
      <Title level={3}>Barmaye</Title>
      <ShoppingCard />
    </div>
  );
};

export default Header;
