import React, { useState } from "react";

import FastImage from "expo-fast-image";
import { Column, Row } from "Components/UI";
import { RouteProp, useRoute } from "@react-navigation/native";
import { Dimensions, TouchableOpacity, Modal, View, Image } from "react-native";

import ArrowLeft from "assets/icons/arrow-left.svg";
import Close from "assets/icons/close.svg";
import { HeaderButton, IconButton } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "Services/safeArea";
import { ReactNativeZoomableView } from "@openspacelabs/react-native-zoomable-view";

const { width, height: deviceHeight } = Dimensions.get("window");
const height = 300;

interface DetailsHeaderProps {
  image: string;
  onBackPress: () => void;
}

function DetailsHeader({ image, onBackPress }: DetailsHeaderProps) {
  const [visible, setIsVisible] = useState(false);

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

      <Modal visible={visible}>
        <Column
          justifyCenter
          alignCenter
          bg="black"
          style={{ width, height: deviceHeight }}
        >
          <ReactNativeZoomableView
            maxZoom={3}
            minZoom={1}
            zoomStep={3}
            initialZoom={1}
          >
            <FastImage
              source={{
                uri: image,
              }}
              resizeMode="contain"
              style={{
                width,
                height: width,
              }}
            />
          </ReactNativeZoomableView>
          <HeaderButton>
            <SafeAreaView top />
            <Row justifyEnd pr={4}>
              <IconButton onPress={() => setIsVisible(false)}>
                <Close fill="white" />
              </IconButton>
            </Row>
          </HeaderButton>
        </Column>
      </Modal>
    </>
  );
}

export default DetailsHeader;
