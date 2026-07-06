import React from 'react'

export default function ShowContact({name,surname,email,contact,address,index,deleteEntry}) {
  return (
<div className='border border-gray-500 w-full h-15 grid grid-cols-5 justify-center pt-3 pl-7'>
        <h2>{name}&nbsp;{surname} </h2>
        <h2>{email}</h2>
        <h2 className='ml-6'>{contact} </h2>
        <h2>{address}</h2>
        <h3 className='items-end ml-14'><button onClick={()=>deleteEntry(index)} className='text-center items-end border border-rose-800 bg-red-300 m-3 p-2 w-16'>Delete</button>
        </h3>
        </div>
  )
}
