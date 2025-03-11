import React from 'react'

export default function ShowContact({name,surname,email,contact,address}) {
  return (
    <div className='border border-gray-500 w-3xl h-15 grid grid-cols-4 justify-center text-justify pt-3 pb-3 pl-7 pr-7'>
        <h2>{name}&nbsp;{surname} </h2>
        <h2>{email} </h2>
        <h2>{contact} </h2>
        <h2>{address}</h2>
        
    </div>
  )
}
