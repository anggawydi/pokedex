import React from 'react';
import '@apollo/space-kit/reset.css';
import { colors as SKColors } from '@apollo/space-kit/colors';
import { Global } from '@emotion/react';

const breakpoints = [480, 768, 992, 1200];
export const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

export const unit = 8;
export const widths = {
  largePageWidth: 1600,
  regularPageWidth: 1100,
  textPageWitdh: 800,
};
export const colors = {
  ...SKColors,
  primary: '#42B549',
  primaryLight: '#84CB66',
  secondary: '#3094C3',
  warning: '#FF5722',
  error: '#EA2626',
  background: SKColors.silver.light,
  text: SKColors.black.base,
  textSecondary: SKColors.grey.dark,

  // TypePokemon
  normal: SKColors.grey.dark,
  fighting: SKColors.red.darkest,
  flying: SKColors.blue.light,
  poison: SKColors.purple.base,
  ground: SKColors.yellow.darker,
  rock: SKColors.grey.darker,
  bug: SKColors.green.darker,
  ghost: SKColors.purple.darkest,
  steel: SKColors.grey.base,
  fire: SKColors.red.base,
  water: SKColors.blue.dark,
  grass: SKColors.green.base,
  electric: SKColors.yellow.base,
  psychic: SKColors.purple.base,
  ice: SKColors.blue.light,
  dragon: SKColors.red.light,
  dark: SKColors.black.darker,
  fairy: SKColors.purple.light,
  unknown: SKColors.black.darkest,
  shadow: SKColors.black.base,
};

const GlobalStyles = () => (
  <Global
    styles={{
      [['html', 'body']]: {
        height: '100%',
      },
      body: {
        margin: 0,
        padding: 0,
        fontFamily: "'Source Sans Pro', sans-serif",
        background: colors.background,
        color: colors.text,
      },
      '#root': {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100%',
      },
      '*': {
        boxSizing: 'border-box',
        margin: 0,
        padding: 0,
      },
      [['h1', 'h2', 'h3', 'h4', 'h5', 'h6']]: {
        margin: 0,
        fontWeight: 600,
      },
      h1: {
        fontSize: 40,
        lineHeight: 1,
      },
      h2: {
        fontSize: 36,
      },
      h3: {
        fontSize: 30,
      },
      h5: {
        fontSize: 16,
        textTransform: 'uppercase',
        letterSpacing: 4,
      },
    }}
  />
);

export default GlobalStyles;
