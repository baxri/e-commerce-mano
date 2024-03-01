import React from 'react';
import DocsIcon from 'assets/icons/dashboard/docs.svg';
import PersonalIcon from 'assets/icons/dashboard/personal.svg';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';

import { ThemeID, THEMES } from 'Theme';

import WalletCard from 'Components/Blocks/WalletCard';

test('WalletCard', () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={THEMES[ThemeID.Main]}>
        <WalletCard.Wrapper mt={5}>
          <WalletCard icon={<PersonalIcon />} title="Personal info" />
          <WalletCard icon={<DocsIcon />} title="ID Docs" />
        </WalletCard.Wrapper>
      </ThemeProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
