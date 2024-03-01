import { themeGet } from "@styled-system/theme-get";
import { UIActivityIndicator } from "react-native-indicators";
import styled, { css } from "styled-components/native";
import { mapToTheme } from "styled-map";
import { margin, MarginProps, styleFn } from "styled-system";

import Text from "Components/UI/Text";

export type ContainerProps = MarginProps;

export const Container = styled.Pressable<ContainerProps>`
  ${margin}
`;

type InnerProps = {
  primary?: boolean;
  disabled?: boolean;
  link?: boolean;
  pressed?: boolean;
  secondary?: boolean;
  error?: boolean;
  hasShadow?: boolean;
};

const innerLinkCss: styleFn = ({ link }: InnerProps) =>
  link &&
  css`
    background-color: ${themeGet("button.inner.link.backgroundColor")};
  `;

const innerPressedCss: styleFn = ({ pressed }: InnerProps) =>
  pressed &&
  css`
    background-color: ${mapToTheme("button.inner.pressed.backgroundColor")};
  `;

const innerDisabledCss: styleFn = ({ disabled }: InnerProps) =>
  disabled &&
  css`
    background-color: ${themeGet("button.inner.disabled.backgroundColor")};
  `;

export const Inner = styled.View.attrs(() => {})<InnerProps>`
  display: flex;
  height: ${themeGet("button.inner.height")}px;
  min-width: ${themeGet("button.inner.minWidth")}px;
  border-radius: ${themeGet("button.inner.borderRadius")}px;
  background-color: ${mapToTheme("button.inner.backgroundColor")};
  align-items: center;
  justify-content: center;

  ${innerPressedCss}
  ${innerDisabledCss}
  ${innerLinkCss}
`;

type TitleProps = {
  disabled?: boolean;
  pressed?: boolean;
  link?: boolean;
  secondary?: boolean;
  error?: boolean;
};

const titleDisabledCss: styleFn = ({ disabled }: InnerProps) =>
  disabled &&
  css`
    color: ${themeGet("button.title.disabled.color")};
  `;

export const Title = styled(Text)<TitleProps>`
  color: ${mapToTheme("button.title.color")};
  font-size: ${mapToTheme("button.title.fontSize")}px;
  line-height: ${themeGet("button.title.lineHeight")}px;
  font-weight: ${themeGet("button.title.fontWeight")};
  text-align: center;

  ${titleDisabledCss}
`;

type IndicatorProps = {
  link?: boolean;
  secondary?: boolean;
  error?: boolean;
};

export const Indicator = styled(UIActivityIndicator).attrs(
  (props: IndicatorProps) => ({
    color: mapToTheme("button.indicator.color")(props)(props),
    size: themeGet("button.indicator.size")(props),
  })
)<IndicatorProps>``;
