import request from "Services/request";

export const productsQuery = async () => {
  const { data } = await request({
    url: "/users/products?keyword=blue",
    method: "POST",
  });

  return data;
};
