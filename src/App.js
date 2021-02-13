import React from 'react';
import gql from 'graphql-tag'
import CircularProgress from '@material-ui/core/CircularProgress';
import { PageProvider } from './context/PageContext'
import ApolloClient from 'apollo-boost';
import { useQuery } from 'react-apollo';
import Home from './Pages/Home';
import Post from './components/Post'

const client = new ApolloClient({
    uri: 'https://api.graphqlplaceholder.com'
});

const App = () => {
const POSTS = gql `

    query {
      posts(pagination: { limit:100 }){
        data {
          title
          body
          author {
            name
          }
          comments{
            body
          }
        }
      }
    } 
    ` 
const { loading, data } = useQuery(POSTS)
return (
    <PageProvider>
        <div className='container'>
            <h1 className='text-center mt-3'>Post Viewer</h1>
            {loading && (
            <div style={{display: 'flex', justifyContent: 'center', alignItems:'center'}}>
              <CircularProgress color='secondary'></CircularProgress>
              </div>)}
           {data && <Post data={data}/>}
        </div>
    </PageProvider>
);
}

export default App;
