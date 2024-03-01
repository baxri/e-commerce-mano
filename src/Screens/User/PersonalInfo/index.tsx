import React from "react";

import { Column, ScrollView } from "Components/UI";

import Note from "Components/Blocks/Note";

function PersonalInfoScreen({ navigation }: any) {
  return (
    <Column backgroundColor="background" stretch>
      <ScrollView keyboardShouldPersistTaps="handled" px={5} py={6}>
        <Note
          mt={5}
          text="This is a screen for user personal information, may be cart or something like this"
        />
      </ScrollView>
    </Column>
  );
}

export default PersonalInfoScreen;
