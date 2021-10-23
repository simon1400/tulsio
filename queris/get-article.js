import { gql } from "@apollo/client";

const getArticleQuery = gql`
  query getArticle($slug: String!) {
    claneks(where: {slug:$slug}) {
      id
      title
      perex
      published_at
      capitoly {
        title
        text
        galery {
          caption
          url
        }
        button {
          link
          text
        }
      }
      author {
        name
        description
        published_at
      }
      labels {
        slug
        title
      }
      image {
        url
      }
    }
  }
`

export default getArticleQuery