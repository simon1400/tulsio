import { gql } from "@apollo/client";

const getArticle = gql`
  query getArticle($slug: String!) {
    articles(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          title
          slug
          perex
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
          labels{
            data{
              attributes{
                title
              }
            }
          }
          categories {
            data {
              attributes {
                slug
              }
            }
          }
          chapters{
            title
            text
            galery{
              data{
                attributes{
                  url
                }
              }
            }
            button{
              link
              text
            }
          }
          authors{
            data{
              attributes{
                name
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
          image {
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

`

export default getArticle