import { gql } from "@apollo/client";

const globalQuery = gql`
  query {
    global{
      newsletter{
        title
        cta{
          text
          link
        }
      }
    }
  }
`

export default globalQuery