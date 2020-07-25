import React from 'react';
import styled from 'styled-components';

// import material ui
import { Box, Typography } from '@material-ui/core';

interface Props {
  title: string;
  subTitle: string;
}

const Title: React.FC<Props> = (props: Props) => {
  return (
    <Container>
      <Typography variant="h3" color="primary">
        {props.title}
      </Typography>
      <Typography variant="h5" color="textSecondary">
        {props.subTitle}
      </Typography>
    </Container>
  );
};

const Container = styled(Box)`
  text-align: center;
  width: 100%;
  padding: 1rem 0;
`;

export default Title;
