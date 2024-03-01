import themeGet from "@styled-system/theme-get";
import styled, { css } from "styled-components/native";
import { margin } from "styled-system";

export const Container = styled.TouchableOpacity`
  padding: 16px;
  flex-grow: 1;
  flex-direction: row;
  align-items: center;
  border-radius: 16px;
  background-color: ${themeGet("common.colors.greyLightest")};
  gap: 16px;
  ${margin}
`;

export const Circle = styled.View`
  border-radius: 100px;
  width: 50px;
  height: 50px;
  overflow: hidden;
  dispaly: flex;
  justify-content: center;
  align-items: center;
`;
