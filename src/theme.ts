import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#303F9F',
      dark: '#212c6f',
      light: '#5965b2',
    },
    secondary: {
      main: '#00BCD4',
      dark: '#008394',
      light: '#33c9dc',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
    },
  },
});

export default theme;
