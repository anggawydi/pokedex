import React from 'react';
import styled from '@emotion/styled';

import { unit, colors } from '../../styles';

const MoveItem = ({ name }) => {
  return (
    <Root>
      <MoveText>{name}</MoveText>
    </Root>
  );
};

export default MoveItem;

const Root = styled.div({
  width: '33.3%',
  padding: `${unit - 2}px ${unit * 2}px`,
  background: '#fff',
  borderRadius: 5,
  border: `1px solid ${colors.grey.base}`,
});

const MoveText = styled.div({
  textTransform: 'capitalize',
});
