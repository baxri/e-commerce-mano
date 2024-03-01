import React from "react";
// @ts-ignore
import { pick } from "@styled-system/props";

import { Column, Row } from "../View";
import { Container, ContainerProps, Indicator, Inner, Title } from "./styles";

type Props = ContainerProps & {
  disabled?: boolean;
  icon?: () => React.ReactNode;
  link?: boolean;
  loading?: boolean;
  secondary?: boolean;
  error?: boolean;
  title?: string;
  primary?: boolean;
  onPress?: () => void;
};

function Button({
  disabled = false,
  link = false,
  icon,
  title = "",
  loading = false,
  secondary = false,
  primary = false,
  error = false,
  onPress,
  ...rest
}: Props) {
  return (
    <Container
      {...pick(rest)}
      activeOpacity={0.8}
      disabled={disabled || loading}
      onPress={onPress}
    >
      {({ pressed }: { pressed: boolean }) => (
        <Inner
          disabled={disabled}
          error={error}
          link={link}
          pressed={pressed}
          primary={primary}
          secondary={secondary}
        >
          {loading ? (
            <Indicator error={error} link={link} secondary={secondary} />
          ) : (
            <Row>
              <Column mr={title && icon ? 5 : 0} alignCenter justifyCenter>
                {icon && icon()}
              </Column>
              <Title
                disabled={disabled}
                error={error}
                link={link}
                numberOfLines={2}
                pressed={pressed}
                secondary={secondary}
              >
                {title}
              </Title>
            </Row>
          )}
        </Inner>
      )}
    </Container>
  );
}

export default Button;
