import React from "react";
import { DrawerActions, StackActions } from "@react-navigation/native";
import ArrowLeft from "assets/icons/arrow-left.svg";
import Settings from "assets/icons/settings.svg";
import { useDebouncedCallback } from "use-debounce";

import { SafeAreaView } from "Services/safeArea";

import { Text } from "Components/UI";
import { Column, Row } from "Components/UI/View";

import { Edge, HeaderButton } from "./styles";

type Props = any & {
  disableMenu?: boolean;
  options: {
    title?: string;
  };
};

function MainHeader({
  route,
  options,
  back,
  navigation,
  disableMenu,
  showTitle,
}: Props) {
  const debouncedGoBack = useDebouncedCallback(() => {
    if (navigation.canGoBack()) {
      navigation.dispatch({ ...StackActions.pop(), source: route.key });
    }
  }, 50);

  const handleOpenMenu = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <Column bg="white">
      <SafeAreaView top />

      <Row height="70px" px={5} alignCenter justifyBetween>
        <Row alignItems="center">
          {!disableMenu && (
            <Edge>
              {back ? (
                <HeaderButton onPress={debouncedGoBack}>
                  <Column alignCenter justifyCenter>
                    <ArrowLeft />
                  </Column>
                </HeaderButton>
              ) : (
                <HeaderButton onPress={handleOpenMenu}>
                  <Column size={24} alignCenter justifyCenter>
                    <Settings />
                  </Column>
                </HeaderButton>
              )}
            </Edge>
          )}
          {showTitle && (
            <Text fontSize={2} fontWeight={1} ml={8}>
              {options.title}
            </Text>
          )}
        </Row>
      </Row>
    </Column>
  );
}

export default MainHeader;
