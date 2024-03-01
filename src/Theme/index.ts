import MainTheme from "./Main";

enum ThemeID {
  Main = "main",
}

const THEMES: Record<ThemeID, any> = {
  [ThemeID.Main]: MainTheme,
};

export { ThemeID, THEMES };
