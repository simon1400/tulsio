import { gql } from "@apollo/client";

const getCategoryNav = gql`
  query {
    categories {
      data {
        attributes {
          title
          slug
        }
      }
    }
  }
`

export default getCategoryNav