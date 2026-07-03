import React from 'react'
import { useState } from 'react'

const Web = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

// let arr =[1,2,3,4,5,6,7,8,9,10]

  return (
    <div className='flex flex-col gap-5'>
        <p>This is the Web component</p>
        {/* {arr.map((item,index)=>{
            return <p key={index}>{item}</p>
        })} */}


         <input value={name} onChange={(e) => setName(e.target.value)} className='border border-gray-300 rounded-md p-2' type="text" placeholder='Enter your name' />
        <input value={email} onChange={(e) => setEmail(e.target.value)} className='border border-gray-300 rounded-md p-2' type="email" placeholder='Enter your email' />
        <input value={password} onChange={(e) => setPassword(e.target.value)} className='border border-gray-300 rounded-md p-2' type="password" placeholder='Enter your password' />
        <button className='bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600' type="submit">Submit</button>

        <h1>name-{name}</h1>
        <h1>email-{email}</h1>
        <h1>password-{password}</h1>




    </div>
  )
}

export default Web
//input handling
//1 brtte force
//2 better approach
//3 optimal