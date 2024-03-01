import React from 'react';
import { ImageBackground } from 'react-native';
// @ts-ignore
import LoginBackgroundImage from 'assets/images/background/login-bg.png';

export default function LoginBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ImageBackground source={LoginBackgroundImage} style={{ flex: 1 }}>
      {children}
    </ImageBackground>
  );
}
