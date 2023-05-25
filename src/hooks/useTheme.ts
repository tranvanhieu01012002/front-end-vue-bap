export const useTheme = () => {
  const THEME_KEY = "_theme";

  const getTheme = (): boolean => {
    return localStorage.getItem(THEME_KEY) === "dark" ? true : false;
  };

  const setTheme = (theme: string) => {
    return localStorage.setItem(THEME_KEY, theme);
  };

  return { getTheme, setTheme };
};
