import styles from '../styles/Home.module.css'
import { SPACEX_FRAGMENT } from '../gql/fragment';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";


const launches = ({ spaceX }) => {
  return ( 
   
        <main className={styles.mainOne}>
          <div className={styles.grid}>
        
        {spaceX.map(spaceXdetail => {
            return(
              <div  className={styles.card}>
              <a
              key={spaceXdetail.id}
              href={spaceXdetail.links.article_link}
             >
                <h2>Mission: {spaceXdetail.mission_name}</h2>
              </a>
              
                
                <div className={styles.cardDetails}>
                    <p>Date of launch: {new Date(spaceXdetail.launch_date_local).toLocaleDateString("en-UK")}</p>

                    <p>Rocket name: {spaceXdetail.rocket.rocket_name} </p>

                  
                    <img className={styles.apiImg} src={spaceXdetail.links.flickr_images}>
                    </img>
                    <h3>Details:</h3>
                    <p>{spaceXdetail.details}</p>
                </div>
              </div>
           )
          })}
      </div>
        </main>
      
    
   );
}
 
export default launches;





export async function getStaticProps() {

  const client = new ApolloClient({
    uri: 'https://api.spacex.land/graphql/',
    cache: new InMemoryCache()
  });

  const { data } = await client.query({
    query: gql`
    ${SPACEX_FRAGMENT}
    `
  })
  console.log('data', data);

  return {
    props: {
      spaceX: data.launchesPast
    },
  }
}