import { createTheme } from "@material-ui/core";
import { purple, deepPurple } from "@material-ui/core/colors";

const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: deepPurple["A100"],
    },
    secondary: {
      main: purple["A400"],
    },
  },
});

export default theme;
