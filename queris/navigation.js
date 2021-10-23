import { gql } from "@apollo/client";

const navigationItemsQuery = gql`
  query {
    navigaceNovum {
      item {
        id
        text
        link
      }
    }
  }
`

export default navigationItemsQuery