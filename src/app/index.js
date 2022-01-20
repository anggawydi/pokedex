import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

import Routes from '../routes';
import GlobalStyles from '../styles';
import { Footer, Header, ContainerWidth, ScrollToTop } from '../components';
import ContextProvider from '../hooks/useStore';

const client = new ApolloClient({
  uri: 'https://graphql-pokeapi.graphcdn.app/',
  cache: new InMemoryCache({
    addTypename: false,
  }),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <GlobalStyles />
      <Header />
      <ContainerWidth>
        <ContextProvider>
          <ScrollToTop />
          <Routes />
        </ContextProvider>
      </ContainerWidth>
      <Footer />
    </ApolloProvider>
  );
};

export default App;
