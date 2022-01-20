import React from 'react';
import styled from '@emotion/styled';
import { LoadingSpinner } from '@apollo/space-kit/Loaders/LoadingSpinner';

import EmptyData from '../EmptyData';
import ContainerList from '../ContainerList';

const QueryResult = ({ loading, error, data, children }) => {
  if (error) {
    return (
      <ContainerList>
        <EmptyData message={`ERROR: ${error.message}`} />
      </ContainerList>
    );
  }
  if (loading) {
    return (
      <SpinnerContainer>
        <LoadingSpinner data-testid="spinner" size="large" theme="grayscale" />
      </SpinnerContainer>
    );
  }
  if (!data) {
    return (
      <ContainerList>
        <EmptyData message={'Data empty...'} />;
      </ContainerList>
    );
  }
  if (data) {
    return children;
  }
};

export default QueryResult;

const SpinnerContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100vh',
});
