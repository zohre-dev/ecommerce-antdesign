import { Menu } from "antd";
import { HomeFilled } from "@ant-design/icons";
import Link from "next/link";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.continer}>
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
                label: <Link href="/categories/mens-shirts">Men's Shirts</Link>,
                key: "mens-shirts",
              },
              {
                label: <Link href="/categories/mens-shoes">Men's Shoes</Link>,
                key: "mens-shoes",
              },
              {
                label: (
                  <Link href="/categories/mens-watches">Men's Watches</Link>
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
                  <Link href="/categories/womens-dresses">Women's Dresses</Link>
                ),
              },
              {
                label: (
                  <Link href="/categories/women-shoes">Women's Shoes</Link>
                ),
                key: "women-shoes",
              },
              {
                label: (
                  <Link href="/categories/women-watches">Women's Watches</Link>
                ),
                key: "women-watches",
              },
              {
                label: (
                  <Link href="/categories/womens-jewllery">
                    Women's Jewellery
                  </Link>
                ),
                key: "womens-jewllery",
              },
            ],
          },
          {
            label: <Link href="/categories/fragrences">Fragrences</Link>,
            key: "fragrences",
          },
        ]}
      />
    </div>
  );
};

export default Header;
