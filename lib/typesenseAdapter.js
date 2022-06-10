import TypesenseInstantsearchAdapter from "typesense-instantsearch-adapter";

let TYPESENSE_SERVER_CONFIG = {
  apiKey: process.env.TYPESENSE_SEARCH_ONLY_API_KEY,
  nodes: [
    {
      host: process.env.TYPESENSE_HOST,
      port: process.env.TYPESENSE_PORT,
      protocol: process.env.TYPESENSE_PROTOCOL,
    },
  ],
  enableCors: true,
  connectionTimeoutSeconds: 1,
  numRetries: 8,
};

export const typesenseAdapter = new TypesenseInstantsearchAdapter({
  server: TYPESENSE_SERVER_CONFIG,
  collectionSpecificSearchParameters: {
    "articles": {
      query_by: "title,perex,chapters,category,titleLabels",
    },
    "categories": {
      query_by: "title,slug",
    },
    "faq": {
      query_by: "question,answer",
      per_page: 100,
      highlight_fields: "question",
      highlight_full_fields: "question"
    },
    "dictionaries": {
      query_by: "title",
      per_page: 100
    },
  }
});

export const searchClient = typesenseAdapter.searchClient;