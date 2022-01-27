import { gql } from "@apollo/client";

const navFooter = gql`
  query {
    navigation {
      data {
        attributes {
          footerNav_1 {
            title
            item {
              name
              link
            }
          }
          footerNav_2 {
            title
            item {
              name
              link
            }
          }
          footerNav_3 {
            title
            item {
              name
              link
            }
          }
          socNav {
            item {
              name
              link
              icon {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export default navFooter