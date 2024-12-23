declare global  {
  type Theme = 'dark' | 'light'
  interface IThemeContext {
    theme: Theme
    setTheme: (theme: Theme) => void
  }
}