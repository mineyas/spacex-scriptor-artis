import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import { SPACEX_FRAGMENT } from '../../gql/fragment';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
  } from "@apollo/client";
  

// export const getStaticProps = async () =>{
//     const res = await fetch('https://api.spacex.land/graphql/');
//     const data = await res.json();

//     return{
//         props: {tryy: data}

//     }
// }

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

const AllLaunch = ({ spaceX }) => {
    console.log('spaceX', spaceX);
    return (  
       
        <main className={styles.main}>
        <div className={styles.launchContainer}>
            <h1>Let's see the last 10 launches:</h1>
            <div className={styles.launchList}>
                {spaceX.map(launch =>(
                <Link 
                href={'/all-launch/' + launch.id}
                key={launch.id} 
                className={styles.launchSingle}
                >
                    <a className={styles.singleMission}>
                        <h3>{launch.mission_name}</h3>
                    </a>
                </Link>
             )
            )}
            </div>
        </div>
      </main>

     
    );
}
 
export default AllLaunch;