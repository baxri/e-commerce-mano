import palette from './palette';

export default {
  inner: {
    height: 52,
    minWidth: 56,
    borderRadius: 100,

    backgroundColor: {
      secondary: palette.alt,
      error: '#EF3F3F1A',
      default: palette.accent,
    },
    pressed: {
      backgroundColor: {
        secondary: palette.alt,
        error: '#EF3F3F1A',
        default: '#5C8DFF',
      },
    },
    disabled: {
      backgroundColor: palette.greyLightest,
    },
    link: {
      backgroundColor: 'transparent',
    },
  },
  title: {
    fontSize: {
      default: 14,
      link: 12,
    },
    lineHeight: 24,
    fontWeight: 700,

    color: {
      secondary: palette.accent,
      error: palette.error,
      link: palette.accent,
      default: 'white',
    },

    disabled: {
      color: palette.greyLight,
    },

    link: {
      color: {
        disabled: palette.antiFlashWhite2,
        pressed: palette.secondary1,
        default: palette.grey,
      },
    },
  },
  indicator: {
    size: 24,

    color: {
      link: palette.smashedPumpkin,
      secondary: palette.yankeesBlue,
      default: palette.white,
    },
  },
};
