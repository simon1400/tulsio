import { gql } from "@apollo/client";

const getFaq = gql`
  query getFaq {
    faq {
      data {
        attributes {
          title
          meta{
            title
            description
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
  }
`

export default getFaq