import { gql } from "@apollo/client";

const getDictionary = gql`
  query getDictionary {
    dictionaryPage {
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
                  alternativeText
                }
              }
            }
          }
        }
      }
    }
  }
`

export default getDictionary