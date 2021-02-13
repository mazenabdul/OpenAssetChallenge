import React, { useReducer } from 'react'

const PageContext = React.createContext()


//Reducer
const reducer = (state, action) => {
  switch(action.type){
    case 'post_limit':
      return { ...state, postCount: action.payload }
    default:
      return state
  }
}

export const PageProvider = ({ children }) => {


  //State and Dispatch
  const [state, dispatch] = useReducer(reducer, {postCount: 1})


//Select the number of posts to display
const amountOfPosts = (amount) => {
  console.log(amount)
  dispatch({ type: 'post_limit', payload: amount })
}

return <PageContext.Provider value={{ state, amountOfPosts }}>{children}</PageContext.Provider>
}

export default PageContext

