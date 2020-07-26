import React from 'react';
import styled from 'styled-components';

// import material ui
import { Box, Typography } from '@material-ui/core';

// import components
import Base from 'components/body/shared/Base';
import Title from 'components/body/shared/Title';
import FistView from 'components/body/fist_view/Index';

export default () => {
  return (
    <Body>
      <FistView />
      <Base name="service">
        <Title title="SERVICE" subTitle="事業内容" />
      </Base>
      <Base name="company">
        <Title title="COMPANY" subTitle="企業案内" />
      </Base>
      <Base name="news">
        <Title title="NEWS" subTitle="お知らせ" />
      </Base>
    </Body>
  );
};

const Body = styled(Box)`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
