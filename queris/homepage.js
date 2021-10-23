import { gql } from "@apollo/client";

const homepageQuery = gql`
  query {
    claneks{
      id
      title
      slug
      perex
      image {
        name,
        url
        }
      categories {
        title,
       slug
      }
    }
  }
`

export default homepageQuery