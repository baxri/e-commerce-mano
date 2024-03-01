import React from "react";
import { TouchableOpacityProps } from "react-native";
// @ts-ignore
import { pick } from "@styled-system/props";
import { MarginProps } from "styled-system";

import { Text } from "Components/UI";

import { Container } from "./styles";

type NoteProps = MarginProps &
  TouchableOpacityProps & {
    title: string;
  };

function LoginButton({ title, onPress, ...rest }: NoteProps) {
  return (
    <Container onPress={onPress} {...pick(rest)}>
      <Text color="grey" fontSize={1} fontWeight={2}>
        {title}
      </Text>
    </Container>
  );
}

export default LoginButton;
