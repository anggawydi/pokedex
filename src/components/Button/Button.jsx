import React from 'react';
import styled from '@emotion/styled';

import { unit, colors } from '../../styles';

const Button = ({ children, secondary, ...props }) => {
  return (
    <ButtonComponent secondary={secondary} {...props}>
      {children}
    </ButtonComponent>
  );
};

export default Button;

const ButtonComponent = styled.button((props) => ({
  borderRadius: 4,
  padding: `${unit}px ${unit * 3}px`,
  boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.15)',
  marginTop: unit,
  cursor: 'pointer',
  border: '0px solid',
  backgroundColor: props.secondary ? colors.red.base : colors.primary,
  color: '#fff',
  ':hover': {
    backgroundColor: props.secondary ? colors.red.dark : colors.green.dark,
  },
}));
