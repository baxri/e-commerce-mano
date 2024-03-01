import button from "./button";
import colors from "./colors";
import common from "./common";
import fonts from "./fonts";

export default {
  name: "Main Theme",
  dark: false,
  button,
  common,
  colors,
  fonts,

  // --   0  1  2  3  4   5   6   7   8   9
  space: [0, 2, 4, 8, 12, 16, 20, 24, 32, 64],
  // --       0   1   2   3    4   5   7   8   9
  fontSizes: [10, 12, 14, 16, 18, 20, 22, 24, 26],
  // --         0   1   2   3    4   5   7   8   9
  lineHeights: [13, 15, 17, 19, 21, 23, 25, 27, 29],
  // --         0    1    2    3
  fontWeights: [400, 500, 600, 700],
};
