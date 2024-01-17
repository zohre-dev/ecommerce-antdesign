"use client";

import AddToCard from "@/components/addToCard/AddToCard";
import styls from "./singleCategory.module.css";
import { getProductsByCategory, getAllProducts } from "@/utils/route";
import { Card, List, Image, Typography, Flex, Badge, Rate } from "antd";

const { Text, Paragraph } = Typography;

//page to show item's of selected categories from Menu
const page = async ({ params }) => {
  const { slug } = params;
  const records =
    slug === "all" ? await getAllProducts() : await getProductsByCategory(slug);

  return (
    <div className={styls.container}>
      {records && (
        <List
          grid={{ column: 3 }}
          dataSource={records.products}
          renderItem={(product, index) => (
            <List.Item>
              <Badge.Ribbon
                className={styls.itemCardBadge}
                text={product.discountPercentage}
                color="pink"
              >
                <Card
                  className={styls.itemCard}
                  title={product.title}
                  actions={[
                    <Rate
                      value={product.rating}
                      allowHalf
                      disabled
                      key={index}
                    />,
                    <AddToCard key={index} item={product} />,
                  ]}
                  cover={
                    <Image
                      alt="card img"
                      src={product.thumbnail}
                      className={styls.itemCardImg}
                    />
                  }
                >
                  <Card.Meta
                    title={
                      <Paragraph
                        ellipsis={{ symbol: "more", expandable: true, rows: 2 }}
                      >
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
              </Badge.Ribbon>
            </List.Item>
          )}
        />
      )}
    </div>
  );
};

export default page;
