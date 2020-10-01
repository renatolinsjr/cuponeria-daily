import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    pink: "#FF9F9F",
    green: "#00BE13",
    yellow: "#E2EC75",
    grey: "#AFAFAF",
    black: "#000000",
    white: "#FFFFFF"
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "14px",
    medium: "16px",
    large: "26px"
  },
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;