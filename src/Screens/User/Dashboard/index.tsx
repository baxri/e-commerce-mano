import React from "react";
import { useQuery } from "react-query";

import { Column, FlatList } from "Components/UI";

import { productsQuery } from "Api/Queries/products";
import ListItem from "Components/Blocks/ListItem";
import MainLayout from "Components/Layouts/MainLayout";
import { Product } from "Types";

function DashboardScreen({ navigation }: any) {
  const data = useQuery("products", productsQuery);

  const handleItemPress = (productId: number) => {
    navigation.navigate("Details", { productId });
  };

  return (
    <MainLayout {...data}>
      {({ items }: { items: Product[] }) => {
        return (
          <Column backgroundColor="white" stretch>
            <FlatList
              showsVerticalScrollIndicator={false}
              mb={100}
              px={5}
              py={6}
              data={items}
              renderItem={({ item }) => (
                <ListItem product={item} onPress={handleItemPress} />
              )}
              keyExtractor={(item) => item.id}
            />
          </Column>
        );
      }}
    </MainLayout>
  );
}

export default DashboardScreen;
