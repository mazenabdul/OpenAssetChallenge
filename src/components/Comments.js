import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'


const COMMENTS = gql `
query{
  comments(pagination: {limit: 2}){
    data{
      body
    }
  }
}
`
const Comments = (props) => {

  return (
    <div class="card text-white bg-dark mt-3 mb-3">
    <div class="card-header">Top Comments:</div>
    <div className='card-title text-center'></div>
    <Query query={COMMENTS}>
        { ({ loading, error, data }) =>  {
          if(loading) return <h4>Loading</h4>
          if(error) console.log('Error')
          return <React.Fragment>
            {
              <div className='mb-3 mt-3 px-3'>
              <p>{data.comments.data[0].body}</p>
              <p>{data.comments.data[1].body}</p>
              </div>
            }
          </React.Fragment> 
        }}
    </Query>
</div>
      
  )
}

export default Comments
