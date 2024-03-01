import React from "react";
import { pick } from "@styled-system/props";
import { MarginProps } from "styled-system";
import FastImage from "expo-fast-image";
import { Column, Text } from "Components/UI";

import { Container, Circle } from "./styles";
import { Product } from "Types";

type NoteProps = MarginProps & {
  product: Product;
  onPress: (productId: number) => void;
};

function ListItem({ product, onPress, ...rest }: NoteProps) {
  return (
    <Container {...pick(rest)} onPress={() => onPress(product.id)}>
      <Circle>
        <FastImage
          source={{
            uri: product.images[0].thumbnail,
          }}
          style={{ width: 86, height: 86 }}
        />
      </Circle>
      <Column flex={1} flexGrow={1}>
        <Text fontSize={3}>{product.title}</Text>
        <Text color="grey" fontSize={1}>
          {product.categories[0].title}
        </Text>
        <Text color="grey" fontSize={3} mt={5}>
          {product.price}$
        </Text>
      </Column>
    </Container>
  );
}

export default ListItem;
