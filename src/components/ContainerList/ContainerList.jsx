import React from 'react';
import styled from '@emotion/styled';

const ContainerList = ({ children }) => {
  return <Container>{children}</Container>;
};

export default ContainerList;

const Container = styled.div({
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  minHeight: '600px',
});
