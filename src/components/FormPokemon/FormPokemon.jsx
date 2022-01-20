import React, { useState } from 'react';
import styled from '@emotion/styled';

import { unit, colors } from '../../styles';
import Button from '../Button';

const FormPokemon = ({ handleSubmit, myPokemon }) => {
  const [nickname, setNickname] = useState('');
  const [error, setError] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (nickname.length < 3 || nickname.length > 10) {
      return setError(true);
    }
    for (let item of myPokemon) {
      if (item.nickname === nickname.toLowerCase()) {
        return setError(true);
      }
    }
    handleSubmit(nickname.toLowerCase());
  };

  return (
    <FormNickName onSubmit={onSubmit}>
      <Label>Pokemon Catched</Label>
      <InputName
        placeholder="Give your pokemon name"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />
      {error && (
        <>
          <ErrorMessage>*name must be 3 - 10 character</ErrorMessage>
          <ErrorMessage>*name must be unique</ErrorMessage>
        </>
      )}
      <Button type="submit">Store Pokemon</Button>
    </FormNickName>
  );
};

export default FormPokemon;

const FormNickName = styled.form({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '300px',
  marginTop: unit,
});

const Label = styled.label({
  color: colors.grey.darker,
  textAlign: 'center'
});

const InputName = styled.input({
  width: '100%',
  padding: `${unit}px`,
});

const ErrorMessage = styled.p({
  color: colors.error,
  marginLeft: unit,
  fontSize: '13px',
  marginTop: 3,
});
