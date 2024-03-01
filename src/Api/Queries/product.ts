import request from "Services/request";

export const productQuery = async (productId: number) => {
  const { data } = await request({
    url: `/users/products/${productId}`,
    method: "GET",
  });

  return data;
};
