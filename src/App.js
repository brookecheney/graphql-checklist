import React from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import  { gql } from 'apollo-boost'

const GET_TODOS = gql`
query getTodos {
  todos {
    done
    id
    text
  }
}`

function App() {
  const { data, loading, error } = useQuery(GET_TODOS);
 

 if (loading) return <div> Loading todos...</div>;
 if (error) return <div>Error fetching todos </div>
  
 return  <div className="vh-100 code
 flex flex-column items-center
 bg-purple white pa4 fl-1">
   <h1 className="f2-1">GraphQL to-do list
   <span role="img"
   aria-label="Checkmark"></span>
   
   </h1>
   {}
   <form className="mb3">
     <input
     className="Pa2 f4
     b--dashed"
     type="text"
     placeholder="Write your todo"
     />
     <button className="pa2 f4 bg-dark-pink" type="submit">Create</button>
   </form>
   
   <div className="flex items-center justify-center flex-column">
   { }
   {data.todos.map(todo => (
    <p key= {todo.id}> 
    <span className="pointer list pa1 f3">
      {todo.text}
    </span>
    <button className="bg-transparent bn f4">
      <span className="red">&times;
      </span>
      
      </button>
    </p>
  ))}
  </div>
    </div>
 
  
  };

export default App;
