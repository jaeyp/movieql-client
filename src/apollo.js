import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://movieql-server.now.sh/graphql',
});

export default client;