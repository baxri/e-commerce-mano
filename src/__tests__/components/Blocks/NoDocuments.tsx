import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';

import { ThemeID, THEMES } from 'Theme';

import NoDocuments from 'Components/Blocks/NoDocuments';

test('Note', () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={THEMES[ThemeID.Main]}>
        <NoDocuments />
      </ThemeProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
