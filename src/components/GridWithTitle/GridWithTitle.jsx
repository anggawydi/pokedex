import React from 'react';
import styled from '@emotion/styled';

import { mq, unit, colors } from '../../styles';

const GridWithTitle = ({ children, title }) => {
  return (
    <GridPadding>
      <Box>
        <Title>{title}</Title>
        {children}
      </Box>
    </GridPadding>
  );
};

export default GridWithTitle;

const GridPadding = styled.div({
  padding: unit,
  width: '100%',
  [mq[0]]: {
    width: '100%',
  },
  [mq[1]]: {
    width: '50%',
  },
});

const Box = styled.div({
  marginTop: unit * 3,
  borderRadius: 6,
  backgroundColor: colors.background,
  padding: unit * 2,
  width: '100%',
  maxWidth: '600px',
});

const Title = styled.h3({
  marginBottom: unit,
  textAlign: 'center',
  fontWeight: 'bold',
});
