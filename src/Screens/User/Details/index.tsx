import React from "react";

import { RouteProp, useRoute } from "@react-navigation/native";

import { useQuery } from "react-query";
import { productQuery } from "Api/Queries/product";
import { Product } from "Types";
import MainLayout from "Components/Layouts/MainLayout";
import ProductDetails from "Components/Blocks/ProductDetails";

function DetailsScreen({ navigation }: any) {
  const route =
    useRoute<RouteProp<Record<string, { productId?: number }>, string>>();

  const productId = route.params?.productId;

  const data = useQuery({
    queryKey: ["products", productId],
    queryFn: () => productQuery(productId as number),
  });

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <MainLayout {...data}>
      {(product: Product) => <ProductDetails {...{ product, handleGoBack }} />}
    </MainLayout>
  );
}

export default DetailsScreen;
