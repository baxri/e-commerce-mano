import React from "react";
// @ts-ignore
import { pick } from "@styled-system/props";
import { MarginProps } from "styled-system";

import { Column, Text } from "Components/UI";

import { Container } from "./styles";

type NoteProps = MarginProps & {
  text: string;
};

function Note({ text, ...rest }: NoteProps) {
  return (
    <Container {...pick(rest)}>
      <Column stretch>
        <Text color="grey" fontSize={1} ml={5}>
          {text}
        </Text>
      </Column>
    </Container>
  );
}

export default Note;
