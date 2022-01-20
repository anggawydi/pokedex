import React from 'react';

import useLocalStorage from './useLocalStorage';

export const StoreContext = React.createContext(null);

const useStore = ({ children }) => {
  const [myPokemon, setMyPokemon] = useLocalStorage('root', []);

  const store = { myPokemon, setMyPokemon };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export default useStore;
