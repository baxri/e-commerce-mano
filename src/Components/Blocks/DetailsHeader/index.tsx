import React, { useState } from "react";

import FastImage from "expo-fast-image";
import { Column } from "Components/UI";
import { RouteProp, useRoute } from "@react-navigation/native";
import { Dimensions, TouchableOpacity } from "react-native";

import ArrowLeft from "assets/icons/arrow-left.svg";
import { HeaderButton, IconButton } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import ImageView from "react-native-image-viewing";
import { SafeAreaView } from "Services/safeArea";

const { width } = Dimensions.get("window");

const height = 300;

interface DetailsHeaderProps {
  image: string;
  onBackPress: () => void;
}

function DetailsHeader({ image, onBackPress }: DetailsHeaderProps) {
  const [visible, setIsVisible] = useState(false);
  const route =
    useRoute<RouteProp<Record<string, { productId?: number }>, string>>();

  const handleImagePress = () => {
    setIsVisible(true);
  };

  return (
    <>
      <Column>
        <FastImage
          source={{
            uri: image,
          }}
          style={{
            width,
            height,
          }}
        />
        <TouchableOpacity
          onPress={handleImagePress}
          activeOpacity={0.5}
          style={{ position: "absolute", top: 0, width, height }}
        >
          <LinearGradient
            colors={["rgba(0,0,0,0.8)", "transparent"]}
            style={{ width, height }}
          />
        </TouchableOpacity>
        <HeaderButton>
          <SafeAreaView top />
          <IconButton onPress={onBackPress}>
            <ArrowLeft fill="white" />
          </IconButton>
        </HeaderButton>
      </Column>
      <ImageView
        images={[
          {
            uri: image,
          },
        ]}
        imageIndex={0}
        visible={visible}
        onRequestClose={() => setIsVisible(false)}
      />
    </>
  );
}

export default DetailsHeader;
