import React from 'react';
import gql from 'graphql-tag'
import CircularProgress from '@material-ui/core/CircularProgress';
import { PageProvider } from './context/PageContext'
import { useQuery } from 'react-apollo';
import Post from './components/Post'

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
)
}

export default App;
