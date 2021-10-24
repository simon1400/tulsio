import { gql } from "@apollo/client";

const navigationQuery = gql`
  query {
    navigaceNovum {
      top_nav{
        navigation_item {
          name
          link
        }
      }
      footer_nav_1 {
        title
        navigation_item {
          name
          link
        }
      }
      footer_nav_2 {
        title
        navigation_item {
          name
          link
        }
      }
      footer_nav_3 {
        title
        navigation_item {
          name
          link
        }
      }
      soc_nav {
        navigation_item {
          link
          icon{
            url
          }
        }
      }
    }
  }
`

export default navigationQuery