import { gql } from "@apollo/client";

const navHeader = gql`
  query {
    navigation {
      data {
        attributes {
          topNav {
            item {
              name
              link
            }
          }
        }
      }
    }
  }
`

export default navHeader