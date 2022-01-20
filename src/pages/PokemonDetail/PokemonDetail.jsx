import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import styled from '@emotion/styled';

import { colors, unit } from '../../styles';
import {
  QueryResult,
  Button,
  FormPokemon,
  StatsBar,
  MoveItem,
  PokemonType,
  GridWithTitle,
} from '../../components';
import { StoreContext } from '../../hooks/useStore';
import { LoadingSpinner } from '@apollo/space-kit/Loaders/LoadingSpinner';

const GET_POKEMON_DATA = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      moves {
        move {
          id
          name
        }
      }
      sprites {
        front_default
      }
      stats {
        stat {
          id
          name
        }
        base_stat
      }
      types {
        type {
          id
          name
        }
      }
      message
    }
  }
`;

const PokemonDetail = () => {
  const params = useParams();
  const { myPokemon, setMyPokemon } = useContext(StoreContext);
  const { loading, data, error } = useQuery(GET_POKEMON_DATA, {
    variables: { name: params.name },
    errorPolicy: 'none',
  });

  const [loadingChance, setLoadingChance] = useState(false);
  const [catched, setCatched] = useState('');

  const handleCatch = () => {
    setLoadingChance(true);
    const chance = Math.floor(Math.random() * 100) + 1;
    setTimeout(() => {
      if (chance > 50) {
        setCatched('catched');
      } else {
        setCatched('not');
      }
      setLoadingChance(false);
    }, 2000);
  };

  const handleStorePokemon = (nickname) => {
    setMyPokemon((prev) => [...prev, { ...data.pokemon, nickname }]);
    setCatched('');
  };

  return (
    <Container>
      <QueryResult loading={loading} data={data} error={error}>
        <ImageContainer>
          <ImagePokemon
            src={data?.pokemon.sprites.front_default}
            alt="pokemon"
          />
          {loadingChance && (
            <LoadingContainer>
              <LoadingSpinner size="large" theme="grayscale" />
            </LoadingContainer>
          )}
        </ImageContainer>
        {!loadingChance && catched === '' && (
          <Button onClick={handleCatch}>Catch The Pokemon</Button>
        )}
        {catched === 'catched' && (
          <FormPokemon
            handleSubmit={handleStorePokemon}
            myPokemon={myPokemon}
          />
        )}
        {catched === 'not' && <TextNotCatched>Pokemon run away</TextNotCatched>}
        <TitleContainer>
          <PokemonName>{data?.pokemon.name}</PokemonName>
          <TitleTag>#{data?.pokemon.id}</TitleTag>
        </TitleContainer>
        <TypeContainer>
          {data?.pokemon.types.map(({ type }, index) => (
            <PokemonType key={index} type={type.name} />
          ))}
        </TypeContainer>
        <ContainerMoveStat>
          <GridWithTitle title="Stats">
            {data?.pokemon.stats.map((item, index) => (
              <StatsBar
                key={index}
                name={item.stat.name}
                stat={item.base_stat}
              />
            ))}
          </GridWithTitle>
          <GridWithTitle title="Moves">
            <MoveItems>
              {data?.pokemon.moves.map(({ move }, index) => (
                <MoveItem key={index} name={move.name} />
              ))}
            </MoveItems>
          </GridWithTitle>
        </ContainerMoveStat>
      </QueryResult>
    </Container>
  );
};

export default PokemonDetail;

const Container = styled.div({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#fff',
  paddingTop: unit * 2,
});

const TitleContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
  marginTop: unit * 2,
});

const PokemonName = styled.h3({
  textTransform: 'capitalize',
  fontWeight: 'bold',
});

const TitleTag = styled.h3({
  color: colors.grey.light,
  marginLeft: `${unit}px`,
});

const ImageContainer = styled.div({
  width: '100%',
  maxWidth: '300px',
  aspectRatio: '1/1',
  padding: 10,
  borderRadius: unit,
  position: 'relative',
});

const ImagePokemon = styled.img({
  width: '100%%',
  height: '100%',
  aspectRatio: '1/1',
  objectFit: 'cover',
});

const TypeContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
  marginTop: '10px',
});

const LoadingContainer = styled.div({
  position: 'absolute',
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  top: 0,
  left: 0,
  backgroundColor: 'rgba(244,246,248, 0.5)',
});

const TextNotCatched = styled.h5({
  color: colors.error,
  marginTop: unit * 1.5,
});

const MoveItems = styled.div({
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
});

const ContainerMoveStat = styled.div({
  display: 'flex',
  width: '100%',
  padding: unit * 2,
  flexWrap: 'wrap',
});
