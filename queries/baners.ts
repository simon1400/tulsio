import { gql } from "@apollo/client";

const getBaners = gql`
  query getBaners($query: [BanerFiltersInput!]!) {
    baners(filters: { or: $query }) {
      data {
        attributes {
          link
          position
          image{
            data{
              attributes{
                url
              }
            }
          }
        }
      }
    }
  }
`

export default getBaners