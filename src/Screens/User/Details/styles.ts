import { HeaderButtonProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import styled, { css } from "styled-components/native";

export const Circle = styled.View`
  width: 158px;
  height: 158px;
  background: #f5cdff;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const SectionTitle = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 25px;
  color: #242236;
  letter-spacing: 0.35px;
  margin-bottom: 12px;
`;

export const SectionLink = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 25px;
  color: #657786;
`;

export const HeaderButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  gap: 10px;
  position: absolute;
  top: 70px;
  left: 5px;
`;
