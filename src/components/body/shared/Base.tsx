import React from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';

// import material ui
import Box from '@material-ui/core/Box';

interface Props {
  name: string;
}

const Base: React.FC<Props> = ({ name, children }) => {
  return (
    <Element name={name}>
      <Container>{children}</Container>
    </Element>
  );
};

const Container = styled(Box)`
  height: 100vh;
  max-width: 100%;
  width: 1200px;
  padding-top: 1rem;
`;

export default Base;
