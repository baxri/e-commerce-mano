import themeGet from '@styled-system/theme-get';
import styled from 'styled-components/native';
import { margin } from 'styled-system';

export const Container = styled.TouchableOpacity`
  padding-horizontal: 24px;
  padding-vertical: 14px;
  height: 44px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
  border-width: 1px;
  background-color: ${themeGet('common.colors.greyLightExtra')};
  border-color: #d4e1ff;

  ${margin}
`;
