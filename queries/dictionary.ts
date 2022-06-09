import { gql } from "@apollo/client";

const getDictionary = gql`
  query getDictionary {
    global {
      data {
        attributes {
          dictionary{
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
  }
`

export default getDictionary