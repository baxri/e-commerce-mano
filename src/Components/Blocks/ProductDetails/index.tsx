import { Column, Row, ScrollView, Text } from "Components/UI";
import React, { useMemo } from "react";
import DetailsHeader from "../DetailsHeader";
import { Product } from "Types";

function ProductDetails({
  product,
  handleGoBack,
}: {
  product: Product;
  handleGoBack: () => void;
}) {
  const image = useMemo(() => {
    return (product?.images || [])[0]?.large;
  }, [product]);

  const info = useMemo(() => {
    return [
      {
        title: "ID",
        value: product?.id,
      },
      {
        title: "SKU",
        value: product?.sku,
      },
      {
        title: "Class",
        value: product?.class_name,
      },
      {
        title: "Original price",
        value: product?.original_price,
      },
      {
        title: "Discounted price",
        value: product?.discounted_price,
      },
      {
        title: "Category",
        value: (product?.categories || [])[0]?.title,
      },
    ];
  }, [product]);

  return (
    <Column backgroundColor="background" stretch>
      <ScrollView keyboardShouldPersistTaps="handled">
        <DetailsHeader image={image} onBackPress={handleGoBack} />
        <Column p={5}>
          <Text fontSize={7}>{product.title}</Text>
          <Text color="gray" fontSize={3}>
            {product.categories[0].title}
          </Text>
          <Text fontSize={5} mt={5}>
            {product.price} $
          </Text>
          {info?.map(({ title, value }) => (
            <Row justifyBetween key={title}>
              <Text color="gray" mt={5}>
                {title}
              </Text>
              <Text color="gray" mt={5}>
                {value}
              </Text>
            </Row>
          ))}
        </Column>
      </ScrollView>
    </Column>
  );
}

export default ProductDetails;
