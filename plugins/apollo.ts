import {ApolloClient, createHttpLink, InMemoryCache} from "@apollo/client/core";

export default defineNuxtPlugin(() => {
  const apolloClient = new ApolloClient({
    link: createHttpLink({
      uri: '/api/graphql',
    }),
    cache: new InMemoryCache(),
  })

  return {
    provide: {
      apolloClient
    }
  }
})