import React from 'react'

export const Articl = ({current}) => {
  return (
    <div className='flex h-screen justify-center items-center text-center bg-blue-400'>
          {current.map((person)=>(

        <div key={person.id} className="bg-white w-1/2 h-1/2 rounded-md flex flex-col items-center">
             <img className='rounded-full w-24 h-24 object-cover mt-4' src={person.image} alt={person.name} /> 
            <h1 className=' text-2xl'>{person.name}</h1>
            <p className='mb-1 italic my-3'>{person.description}</p>


            <div className='flex justify-between'>
            <button type="button" class=" my-4 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">prev</button>
            <button type="button" class="my-4 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"> Next </button>
            </div>
          

        </div>
         ))}
    </div>
  )
}
