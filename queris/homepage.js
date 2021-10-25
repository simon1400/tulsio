import { gql } from "@apollo/client";

const homepageQuery = gql`
  query {
    homepage{
      title,
      cta{
        text
        link
      }
      cta_sec{
        text
        link
      }
      Short_article{
        title
        image{
          url
        }
        short_text
        article{
          slug
          categories{
            title
          }
        }
      }
    }
  }
`

export default homepageQuery