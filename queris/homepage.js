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
      article_top {
        id
        title
        slug
        perex
        image{
          name
          url
        }
        categories{
          title,
          slug
        }
      }
      articles {
        id
        title
        slug
        perex
        image{
          name
          url
        }
        categories{
          title,
          slug
        }
      }
    }
  }
`

export default homepageQuery