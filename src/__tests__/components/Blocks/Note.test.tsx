import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';

import { ThemeID, THEMES } from 'Theme';

import Note from 'Components/Blocks/Note';

test('Note', () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={THEMES[ThemeID.Main]}>
        <Note text="Personal info" />
      </ThemeProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
