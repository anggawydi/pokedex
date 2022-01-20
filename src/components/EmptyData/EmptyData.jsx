import React from 'react';
import styled from '@emotion/styled';

const EmptyList = ({ message }) => {
  return (
    <Root>
      <Text>{message}</Text>
    </Root>
  );
};

export default EmptyList;

const Root = styled.div({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '10px',
});

const Text = styled.h3({
  textAlign: 'center',
});
