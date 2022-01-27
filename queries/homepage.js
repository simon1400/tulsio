import { gql } from "@apollo/client";

const homepageQuery = gql`
  query {
    homepage {
      data {
        attributes {
          title
          cta {
            text
            link
          }
          secCta {
            text
            link
          }
          articles {
            title
            text
            image {
              data {
                attributes {
                  url
                }
              }
            }
            article {
              data {
                attributes {
                  slug
                  categories {
                    data {
                      attributes {
                        title
                        slug
                      }
                    }
                  }
                }
              }
            }
          }
          meta {
            title
            description
          }
        }
      }
    }
  }
`

export default homepageQuery