import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';

import { ThemeID, THEMES } from 'Theme';

import { Text } from 'Components/UI';

test('Text', () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={THEMES[ThemeID.Main]}>
        <Text>TEST</Text>
      </ThemeProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
