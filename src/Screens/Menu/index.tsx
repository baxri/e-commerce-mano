import React from "react";

import { SafeAreaView } from "Services/safeArea";
import { setIdToken } from "Services/Store/session";

import { Button, Column, ScrollView } from "Components/UI";

import Note from "Components/Blocks/Note";

function MenuScreen() {
  return (
    <Column backgroundColor={"white"} justifyCenter stretch>
      <SafeAreaView top />
      <ScrollView p={5}>
        <Note mt={5} text="This is additional screen for the Drawer" />
      </ScrollView>
      <Column p={5}>
        <Button
          title="Sign out"
          error
          onPress={() => {
            setIdToken("");
          }}
        />
      </Column>
      <SafeAreaView bottom />
    </Column>
  );
}

export default MenuScreen;
