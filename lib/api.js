import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from "@apollo/client";

export function getStrapiURL(path = "") {
  return `${
    process.env.APP_API || "http://localhost:1337"
  }${path}`;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path);
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
}

// Graphql
const httpLink = createHttpLink({
  uri: `${getStrapiURL()}/graphql`,
});

export const GraphQLProvider = ({ children }) => {
  const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
