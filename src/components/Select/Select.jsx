import React from 'react';
import styled from '@emotion/styled';

const Select = ({ value, setValue, children }) => {
  return (
    <Root>
      <SelectComp
        value={value}
        onChange={(e) => setValue(e.target.value)}
        data-testid="select-test"
      >
        {children}
      </SelectComp>
    </Root>
  );
};

export default Select;

const Root = styled.div({
  width: '200px',
  boxShadow:
    'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
  padding: '10px 10px 10px 10px',
  backgroundColor: '#fff',
  borderRadius: 5,
  margin: '15px 0 0 10px',
});

const SelectComp = styled.select({
  width: '100%',
  border: 'none',
  outline: 'none',
});
