import React from 'react';
import styled from 'styled-components';

// import material ui
import Box from '@material-ui/core/Box';

// import components
import Base from 'components/body/shared/Base';
import Title from 'components/body/shared/Title';

export default () => {
  return (
    <Body>
      <Base>
        <Title title="SERVICE" subTitle="事業内容" />
      </Base>
      <Base>content 2</Base>
      <Base>content 3</Base>
    </Body>
  );
};

const Body = styled(Box)`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
