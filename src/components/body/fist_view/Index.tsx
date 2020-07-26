import React from 'react';
import styled, { ThemeProvider as StyledThemeProvider, keyframes } from 'styled-components';
import { Link } from 'react-scroll';

// import material ui
import { Box, Typography, Button } from '@material-ui/core/';
import { ThemeProvider as MaterialThemeProvider, createMuiTheme } from '@material-ui/core/';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import fistViewVideo from 'videos/first_view.mp4';
import poster from 'images/first_view.png';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FAFAFA',
    },
  },
});

const FistView = () => {
  return (
    <>
      <VideoContainer>
        <Video autoPlay loop poster={poster}>
          <source src={fistViewVideo} type="video/mp4" />
        </Video>
      </VideoContainer>
      <MaterialThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>
          <FirstViewContainer>
            <TextContainer>
              <Typography variant="h4" align="center" color="primary">
                ITで幸せな未来を
              </Typography>
              <Typography variant="h6" align="center" color="primary" style={{ opacity: '0.8' }}>
                Shift the paradigm for our future.
              </Typography>
            </TextContainer>
            <ButtonContainer>
              <Link to="service" spy={true} smooth={true} offset={0} duration={1000}>
                <StyledButton variant="outlined" color="primary" endIcon={<ExpandMoreIcon />}>
                  Scroll
                </StyledButton>
              </Link>
            </ButtonContainer>
          </FirstViewContainer>
        </StyledThemeProvider>
      </MaterialThemeProvider>
    </>
  );
};

const VideoContainer = styled(Box)`
  position: absolute;
  z-index: -1;
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  overflow: hidden;
  width: 100vw;
  height: auto;
  background-size: cover;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-image: none;
`;

const Video = styled.video`
  position: absolute;
  min-width: 100vw;
  min-height: 100vh;
  z-index: -1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: url(${poster}) no-repeat;
  background-size: cover;
`;

const FirstViewContainer = styled(Box)`
  height: 100vh;
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 100;
  }
`;

const TextContainer = styled(Box)`
  height: 80%;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: ${fadeIn} 5s ease 0.5s 1 normal;
`;

const ButtonContainer = styled(Box)`
  height: 20%;
  width: 100%;
  display: flex;
  justify-content: center;
  animation: ${fadeIn} 5s ease 1s 1 normal;
`;

const StyledButton = styled(Button)`
  font-size: 1.5rem;
  height: fit-content;
  min-height: 3rem;
  width: 15rem;
`;

export default FistView;
