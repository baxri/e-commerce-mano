import React, { useState } from "react";
import { Alert } from "react-native";
import AppleIcon from "assets/icons/login/apple.svg";
import BrandedCircleIcon from "assets/icons/login/branded-circle.svg";
import EmailIcon from "assets/icons/login/email.svg";
import GoogleIcon from "assets/icons/login/google.svg";
import { useTranslation } from "react-i18next";
import ImageView from "react-native-image-viewing";

import { SafeAreaView } from "Services/safeArea";
import { setIdToken } from "Services/Store/session";
import LoginBackground from "Components/Blocks/LoginBackground";
import LoginButton from "Components/Blocks/LoginButton";
import { Button, LanguageSelector, ScrollView, Text } from "Components/UI";
import { Column, Row } from "Components/UI/View";
import WelcomeCarusel from "Components/UI/WelcomeCarusel";

const images = [
  {
    uri: "https://images.unsplash.com/photo-1571501679680-de32f1e7aad4",
  },
];

function WelcomeScreen({ navigation }: any) {
  const { t } = useTranslation();
  const [visible, setIsVisible] = useState(true);

  const handleGetStartedPress = () => {
    setIdToken("guest");
  };

  return (
    <LoginBackground>
      <Column justifyCenter stretch>
        <ScrollView px={8} style={{ paddingTop: "60%" }}>
          <Text fontSize={8} fontWeight={1} mt={6}>
            E-COMMERCE
          </Text>
          <Text fontSize={5} fontWeight={1} mt={3}>
            Welcome to our APP
          </Text>
          <Text color="grey" fontSize={2} mt={6}>
            You can find many interesting things here, just check list of the
            products and find something thats fits for you.
          </Text>
          <LoginButton
            icon={<EmailIcon />}
            mt={50}
            title="Get Started"
            onPress={handleGetStartedPress}
          />
        </ScrollView>
        {/* <ImageView
          images={images}
          imageIndex={0}
          visible={visible}
          onRequestClose={() => setIsVisible(false)}
        /> */}
      </Column>
    </LoginBackground>
  );
}

export default WelcomeScreen;
