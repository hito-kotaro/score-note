import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    green: Palette["primary"];
    orange: Palette["primary"];
  }

  interface PaletteOptions {
    green?: PaletteOptions["primary"];
    orange?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    green: true;
    orange: true;
  }
}

declare module "@mui/material/TextField" {
  interface TextFieldPropsColorOverrides {
    green: true;
  }
}

export const theme = createTheme({
  palette: {
    green: {
      main: "#4FBB20",
      light: "#4FBB20D",
      dark: "#4FBB20",
      contrastText: "#E9DB5",
    },
    orange: {
      main: "#FB6439",
      light: "#FB6439",
      dark: "#FB6439",
      contrastText: "#FB6439",
    },
  },
});
