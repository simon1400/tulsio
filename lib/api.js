import { ApolloClient, createHttpLink, ApolloProvider, InMemoryCache } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import Cookies from 'js-cookie'

export function getStrapiURL(path = "") {
  return `${
    process.env.APP_API || "http://localhost:1335"
  }${path}`;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path);
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
}

const APP_API = process.env.APP_API

const httpLink = createHttpLink({
  uri: `${APP_API}/graphql`,
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = Cookies.get('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export const WithGraphQL = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
