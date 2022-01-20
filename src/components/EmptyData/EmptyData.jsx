import React from 'react';
import styled from '@emotion/styled';

const EmptyList = ({ message }) => {
  return (
    <Root>
      <h3>{message}</h3>
    </Root>
  );
};

export default EmptyList;

const Root = styled.div({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
