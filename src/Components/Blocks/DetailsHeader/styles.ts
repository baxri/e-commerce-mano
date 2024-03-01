import styled, { css } from "styled-components/native";

export const HeaderButton = styled.View`
  width: 100%;
  border-radius: 40px;
  gap: 10px;
  position: absolute;
  top: 0px;
  left: 5px;
`;

export const IconButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
`;
