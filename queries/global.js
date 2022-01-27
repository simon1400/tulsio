import { gql } from "@apollo/client";

const globalQuery = gql`
  query {
    global {
      data {
        attributes {
          newsletter {
            title
            cta {
              link
              text
            }
          }
        }
      }
    }
  }
`

export default globalQuery