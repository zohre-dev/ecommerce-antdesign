import { Button, message } from "antd";
import { useState } from "react";
import { addToCard } from "@/utils/route";

const AddToCard = ({ item }) => {
  const [loading, setLoading] = useState(false);

  const addToCardButton = () => {
    setLoading(true);
    addToCard(item.id).then(() => {
      message.success(`${item.title} has been added`);
      setLoading(false);
    });
  };

  return (
    <Button type="link" loading={loading} onClick={() => addToCardButton()}>
      Add To Card
    </Button>
  );
};

export default AddToCard;
