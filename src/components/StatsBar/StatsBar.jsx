import React from 'react';
import styled from '@emotion/styled';

import { mq, colors, unit } from '../../styles';

const StatsBar = ({ name, stat }) => {
  return (
    <BoxStat>
      <StatName>{name}</StatName>
      <StatBar>
        <StatPokemon stat={stat} />
      </StatBar>
    </BoxStat>
  );
};

export default StatsBar;

const BoxStat = styled.div({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  marginBottom: unit * 1.5,
});

const StatName = styled.div({
  [mq[0]]: {
    width: '40%',
  },
  [mq[1]]: {
    width: '40%',
  },

  width: '40%',
  textTransform: 'capitalize',
});

const StatBar = styled.div({
  width: '80%',
  height: '20px',
  backgroundColor: colors.grey.light,
});

const StatPokemon = styled.div((props) => ({
  height: '100%',
  width: `${props.stat > 100 ? 100 : props.stat}%`,
  backgroundColor: colors.primaryLight,
}));
