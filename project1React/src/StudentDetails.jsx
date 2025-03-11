import React from 'react'

export default function StudentDetails({name,surname,age,address,city,deleteEntry,i}) {
  return (
    <div> 
      <h1> Student Name:{name} {surname}</h1>
      <h2> Age: {age}</h2>
      <h2> Address : {address} ,{city}</h2><br />
      {/* <button onClick={()=>deleteEntry(i)}>Delete</button> */}
    </div>
  )
}
