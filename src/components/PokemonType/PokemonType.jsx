import React from 'react';
import styled from '@emotion/styled';

import { colors } from '../../styles';

const PokemonType = ({ type, halfPadding }) => {
  return (
    <BoxType type={type} halfPadding={halfPadding}>
      <TypeText>{type}</TypeText>
    </BoxType>
  );
};

export default PokemonType;

const BoxType = styled.div((props) => ({
  borderRadius: 6,
  padding: props.halfPadding ? '5px 15px' : '5px 30px',
  margin: '0 10px',
  textTransform: 'capitalize',
  backgroundColor: colors[props.type],
}));

const TypeText = styled.p({
  color: '#fff',
});
