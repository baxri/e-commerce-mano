declare module "*.svg" {
  import React from "react";
  import { SvgProps } from "react-native-svg";
  const content: React.FC<SvgProps>;
  export default content;
}
declare module "expo-fast-image" {
  const content: any;
  export default content;
}
declare module "@styled-system/props" {
  const pick: any;
  export { pick };
}
