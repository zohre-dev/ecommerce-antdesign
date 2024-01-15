"use client";

import { Card, List, Image, Typography, Flex } from "antd";
const { Text, Paragraph } = Typography;

import styls from "./singleCategory.module.css";

const getProductsByCategory = async (slug) => {
  const res = await fetch(`https://dummyjson.com/products/category/${slug}`, {
    cache: "no-store",
  });
  console.log("zozo", res);
  if (!res.ok) throw new Error("Failed");
  return res.json();
};

//page to show item's of selected categories from Menu
const page = async ({ params }) => {
  const { slug } = params;
  const records = await getProductsByCategory(slug);

  return (
    <div className={styls.container}>
      {records && (
        <List
          grid={{ column: 3 }}
          dataSource={records.products}
          renderItem={(product, index) => (
            <List.Item>
              <Card
                title={product.title}
                key={index}
                cover={
                  <Image
                    src={product.thumbnail}
                    className={styls.itemCardImg}
                  />
                }
              >
                <Card.Meta
                  title={
                    <Paragraph>
                      <Flex gap="small">
                        <Text>Price: ${product.price}</Text>
                        <Text delete type="danger">
                          $
                          {parseFloat(
                            product.price +
                              (product.price * product.discountPercentage) /
                                100,
                          ).toFixed(2)}
                        </Text>
                      </Flex>
                    </Paragraph>
                  }
                  description={product.description}
                ></Card.Meta>
              </Card>
            </List.Item>
          )}
        />
      )}
    </div>
  );
};

export default page;
