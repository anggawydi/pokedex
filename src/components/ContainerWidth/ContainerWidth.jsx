import React from 'react';
import styled from '@emotion/styled';

import { widths } from '../../styles';

const Container = ({ children }) => {
  return (
    <Root>
      <BoxContainer>{children}</BoxContainer>
    </Root>
  );
};

export default Container;

const Root = styled.div({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
});

const BoxContainer = styled.div({
  width: `${widths.regularPageWidth}px`,
});
