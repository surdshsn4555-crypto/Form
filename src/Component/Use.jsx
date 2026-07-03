import React from 'react'
import { useState } from 'react'

const Use = () => {
console.log("use component render")

    const [count, setCount] = useState(0)//primitive type
    const [user, setUser] = useState({
        name: "Amit",//reference type not object type
    }) 
  return (
    <div>
      <h1>count is - {count}</h1>
      <h1>name is - {user.name}  </h1>

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setUser({...user, name: "John"})
         //user.name = "John" //this is not working because user is reference type and react will not re-render the component because it is not changing the reference of the object
         }>Change name</button>
    </div>
  )
}

export default Use