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
                slug
                color
              }
            }
          }
          categories {
            data {
              attributes {
                slug
                title
              }
            }
          }
          chapters(pagination: { pageSize: 50 }){
            title
            text
            galery{
              data{
                attributes{
                  url
                  alternativeText
                }
              }
            }
            button{
              link
              text
            }
            baner
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
                alternativeText
              }
            }
          }
        }
      }
    }
  }

`

export default getArticle