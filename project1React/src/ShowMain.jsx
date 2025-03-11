import React from 'react'

export default function ShowMain({name,surname,age,address,city}) {
  return (
    <div>
      <h1>
        Student Name:{name}  {surname}</h1>
      <h2>Age : {age}</h2>
      <h2>Address: {address} ,{city}</h2>
    </div>
  )
}
