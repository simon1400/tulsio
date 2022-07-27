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
            article {
              data {
                attributes {
                  title
                  perex
                  slug
                  image {
                    data {
                      attributes {
                        url
                        alternativeText
                      }
                    }
                  }
                  categories {
                    data {
                      attributes {
                        title
                        slug
                      }
                    }
                  }
                  labels {
                    data {
                      attributes {
                        title
                        slug
                        color
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