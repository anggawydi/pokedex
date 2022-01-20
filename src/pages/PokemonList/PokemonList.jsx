/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useRef, useContext } from 'react';
import { gql, useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

import { StoreContext } from '../../hooks/useStore';
import { QueryResult, CardPokemon, ContainerList } from '../../components';

export const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      nextOffset
      results {
        id
        name
        image
      }
      message
    }
  }
`;

const gqlVariables = {
  limit: 25,
  offset: 0,
};

const PokemonList = () => {
  const lastItem = useRef();
  const navigate = useNavigate();
  const { myPokemon } = useContext(StoreContext);
  const { loading, data, fetchMore, error } = useQuery(GET_POKEMONS, {
    variables: gqlVariables,
    errorPolicy: 'none',
  });

  const lastElementRef = (node) => {
    if (loading) return;
    if (lastItem.current) lastItem.current.disconnect();
    lastItem.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && data.pokemons.nextOffset) {
        fetchMore({
          variables: {
            offset: data.pokemons.nextOffset,
          },
          updateQuery(prev, { fetchMoreResult }) {
            if (!fetchMoreResult) return prev;
            return {
              pokemons: {
                ...fetchMoreResult.pokemons,
                results: [
                  ...prev.pokemons.results,
                  ...fetchMoreResult.pokemons.results,
                ],
              },
            };
          },
        });
      }
    });
    if (node) lastItem.current.observe(node);
  };

  return (
    <ContainerList>
      <QueryResult loading={loading} data={data} error={error}>
        {data?.pokemons.results.map((item, index) => {
          const matchPokemon = myPokemon.filter((x) => x.id === item.id);
          return (
            <CardPokemon
              key={item.id}
              ref={
                index === data.pokemons.results.length - 1
                  ? lastElementRef
                  : null
              }
              onClick={() => navigate(`/${item.name}`)}
              data={item}
              owned={matchPokemon.length}
            />
          );
        })}
      </QueryResult>
    </ContainerList>
  );
};

export default PokemonList;
