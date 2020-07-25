import React from 'react';
import styled from 'styled-components';

// import material ui
import Box from '@material-ui/core/Box';

const Base: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled(Box)`
  height: 100vh;
  max-width: 100%;
  width: 1200px;
`;

export default Base;
