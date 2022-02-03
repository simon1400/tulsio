import { gql } from "@apollo/client";

const getCategory = gql`
  query category($slug:String!) {
    categories(filters: {slug:{eq:$slug}}) {
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
          labels {
            data{
              attributes{
                title
                slug
              }
            }
          }
          articles{
            data {
              attributes {
                title
                slug
                perex
                categories {
                  data{
                    attributes{
                      slug
                    }
                  }
                }
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
  }
`

export default getCategory