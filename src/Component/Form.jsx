
import React from 'react'

const Form = () => {
  return (
    <div className='bg-#fff rounded-lg shadow-md p-10 text-center m-10 mt-20'>
      <h1 className='text-2xl font-bold mb-10'>Form in React</h1>
      <form >
        <label className='text-gray-700 text-sm font-bold mb-2 flex justify-content' htmlFor=" firstname">First Name*</label>
        <input className='shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-10 w-full' type="text" id="firstname" placeholder='Enter First Name' name="firstname" />

         <label className='text-gray-700 text-sm font-bold mb-2 flex justify-content ' htmlFor=" lastname">Last Name*</label>
        <input className='shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-10 w-full' type="text" id="lastname" placeholder='Enter Last Name' name="lastname" />

         <label className=' text-gray-700 text-sm font-bold mb-2 flex justify-content ' htmlFor="email">Email*</label>
        <input className='shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-10 w-full' type="email" id="email" placeholder='Enter Email' name="email" />

         <label className=' text-gray-700 text-sm font-bold mb-2 flex justify-content ' htmlFor="contact">Contact*</label>
        <input className='shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-10 w-full' type="text" id="contact" placeholder='Enter Contact Number' name="contact" />

         <label className=' text-gray-700 text-sm font-bold mb-2 flex justify-content' htmlFor="gender ">Gender*</label>
         <input className='shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline g-10' type="radio" id="male" name="gender" value="male" />Male
         <input className='shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline g-10' type="radio" id="female" name="gender" value="female" />Female
         <input className='shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline g-10' type="radio" id="other" name="gender" value="other" />other


         <label className=' text-gray-700 text-sm font-bold mb-2 flex justify-content ' htmlFor="Subject">Subject*</label>
         <select className='shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline flex justify-content' id="subject" name="subject">
           <option className='text-gray-700' value="">Select a subject</option>
           <option className='text-gray-700' value="math">Math</option>
           <option className='text-gray-700' value="science">Science</option>
           <option className='text-gray-700' value="english">English</option>
         </select>

         <label className=' text-gray-700 text-sm font-bold mb-2 flex justify-content' htmlFor="resume">Resume*</label>
         <input className='shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="file" id="resume" placeholder='Upload Resume' name="resume" />

         <label className=' text-gray-700 text-sm font-bold mb-2 flex justify-content' htmlFor="url">URL*</label>
         <input className='shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="url" id="url" placeholder='Enter Image URL' name="url" />

         <label className=' text-gray-700 text-sm font-bold mb-2 flex justify-content' htmlFor="about">About*</label>
         <textarea className='shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' name="about" id="about" cols="30" rows="10" placeholder='Enter About' />

         <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type="submit">Submit</button>
         <button className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded' type="reset">Reset</button>
         

      </form>
      < Use />
    </div>
  )
}

export default Form
