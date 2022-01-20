/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState, useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

import { StoreContext } from '../../hooks/useStore';
import {
  ContainerList,
  CardPokemon,
  EmptyData,
  Select,
} from '../../components';

const GET_TYPES = gql`
  query types {
    types {
      message
      results {
        id
        name
      }
    }
  }
`;

const MyPokemonList = () => {
  const navigate = useNavigate();
  const { myPokemon, setMyPokemon } = useContext(StoreContext);
  const [dataPokemon, setDataPokemon] = useState(myPokemon);
  const [selectedType, setSelectedType] = useState('');

  const { data: dataSelect } = useQuery(GET_TYPES, {
    errorPolicy: 'none',
  });

  const handleRelease = (nickname) => {
    const index = myPokemon.findIndex((item) => item.nickname === nickname);
    setMyPokemon((prev) => {
      const data = [...prev];
      data.splice(index, 1);
      return data;
    });
  };

  useEffect(() => {
    if (selectedType !== '') {
      const newData = [];
      myPokemon.forEach((element) => {
        element.types.forEach((x) => {
          if (x.type.name === selectedType) {
            newData.push(element);
          }
        });
      });

      setDataPokemon(newData);
    } else {
      setDataPokemon(myPokemon);
    }
  }, [selectedType, myPokemon]);

  return (
    <div>
      <Select value={selectedType} setValue={setSelectedType}>
        <option value="">All Type</option>
        {dataSelect?.types.results.map(({ id, name }) => (
          <option key={id} value={name}>
            {name}
          </option>
        ))}
      </Select>
      <ContainerList>
        {dataPokemon.map((item) => (
          <CardPokemon
            data={item}
            myPokemon
            key={item.nickname}
            onClick={() => navigate(`/${item.name}`)}
            actionRelease={() => handleRelease(item.nickname)}
          />
        ))}
        {dataPokemon.length === 0 && (
          <EmptyData message="you don't have pokemon, search and catch in pokemon list" />
        )}
      </ContainerList>
    </div>
  );
};

export default MyPokemonList;
