import { ApolloClient, InMemoryCache } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";

// const client = new ApolloClient({
//   uri: "https://apollo-music-react-app.herokuapp.com/v1/graphql",
//   cache: new InMemoryCache(),
// });

const client = new ApolloClient({
  link: new WebSocketLink({
    uri: "wss://apollo-music-react-app.herokuapp.com/v1/graphql",
    options: {
      reconnect: true,
    },
  }),
  cache: new InMemoryCache(),
});

export default client;
