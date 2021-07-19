import { SPACEX_FRAGMENT } from '../../gql/fragment';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
  } from "@apollo/client";
  

// export async function getStaticPaths(){
//     const res = await fetch('https://api.spacex.land/graphql/');
//     const {data} =  res.json();


//     const paths = data.map( launch=>{
//         return{
//             params: {id: launch.id.toString() }
//         }
//     })

//     return{
//         paths,
//         fallback: false
//     }
// }



const SingleLaunch = ({spaceX}) => {
    return (  
        <div>
            {spaceX.map(launch =>(
                <a className={styles.singleMission}>
                    <h3>SpaceX Details {spaceX.rocket.rocket_name}</h3>
                </a>
            )
            )}
        </div>
    );
}
 
export default SingleLaunch;


export async function getStaticProps(param) {

    const client = new ApolloClient({
      uri: 'https://api.spacex.land/graphql/${content.param.id}',
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

  // pages/blog/[slug].js
export async function getStaticPaths(params) {
    return {
      paths: [
        // String variant:
        // '/blog/first-post',
        // Object variant:
        { params: { id: '109' } },
      ],
      fallback: true,
    }
  }



// export async function getStaticPaths(){
//     const res = await fetch('https://api.spacex.land/graphql/')
//     const space =   res.json()

//    const paths = space.data.map( spaceX =>({
//        params: { id: spaceX.id}
//    }))
   
// }

// export async function getStaticProps(params){
//     const res = await fetch('https://api.spacex.land/graphql/${content.param.id}')
//     const spaceX = await res.json()

//     return{
//         props: {
//             spaceX,
//         }
//     }
// }


