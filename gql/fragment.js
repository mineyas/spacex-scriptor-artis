import { gql } from '@apollo/client';

export const SPACEX_FRAGMENT = gql`
query GetLaunches {
    launchesPast(limit: 10) {
      id
      launch_date_local
      launch_site {
        site_name_long
      }
      links {
        article_link
        flickr_images
      }
      rocket {
        rocket_name
      }
      mission_name
      launch_success
      details
  } 
}
`;