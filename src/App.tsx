import React from 'react';
import { StylesProvider, ThemeProvider as MaterialThemeProvider } from '@material-ui/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import theme from 'theme';

import Body from 'components/body/Index';

function App() {
  return (
    <StylesProvider injectFirst>
      <MaterialThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>
          <Body></Body>
        </StyledThemeProvider>
      </MaterialThemeProvider>
    </StylesProvider>
  );
}

export default App;
