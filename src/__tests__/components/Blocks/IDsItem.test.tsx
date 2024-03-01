import React from 'react';
import PersonalIcon from 'assets/icons/dashboard/personal.svg';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';

import { ThemeID, THEMES } from 'Theme';

import IDsItem from 'Components/Blocks/IDsItem';

test('IDsItem', () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={THEMES[ThemeID.Main]}>
        <IDsItem icon={<PersonalIcon />} title="Personal info" />
      </ThemeProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
