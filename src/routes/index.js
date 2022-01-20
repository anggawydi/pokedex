import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { PokemonList, MyPokemonList, PokemonDetail } from '../pages';

const Router = () => {
  return (
    <Routes>
      <Route element={<PokemonList />} path="/" />
      <Route element={<MyPokemonList />} path="/my-pokemon-list" />
      <Route element={<PokemonDetail />} path="/:name" />
      <Route element={<Navigate to="/" />} path="*" />
    </Routes>
  );
};

export default Router;
