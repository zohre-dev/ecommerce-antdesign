export const getShoppingCard = async () => {
  const res = await fetch(`https://dummyjson.com/carts/1`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed");
  return res.json();
};

export const getAllProducts = async () => {
  const res = await fetch(`https://dummyjson.com/products`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed");
  return res.json();
};

export const getProductsByCategory = async (slug) => {
  const res = await fetch(`https://dummyjson.com/products/category/${slug}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed");
  return res.json();
};

export const addToCard = async (id) => {
  return fetch("https://dummyjson.com/carts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userId: 1,
      products: [
        {
          id: id,
          quantity: 1,
        },
      ],
    }),
  }).then((res) => res.json());
};
