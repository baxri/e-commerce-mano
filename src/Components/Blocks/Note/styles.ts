import themeGet from '@styled-system/theme-get';
import styled, { css } from 'styled-components/native';
import { margin } from 'styled-system';

export const Container = styled.TouchableOpacity`
  padding: 16px;
  flex-grow: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 16px;
  border-width: 1px;
  background-color: ${themeGet('common.colors.greyLightExtra')};
  border-color: ${themeGet('common.colors.altLight')};

  ${margin}
`;
