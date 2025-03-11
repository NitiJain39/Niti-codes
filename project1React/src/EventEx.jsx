import React, {useState} from 'react'

export default function EventEx() {
const [x,setX]=useState("xyz")
    const HclickEvent = () =>{
        setX("abc")
        console.log(x)
    }
  return (

    <div>
      <h1>{x}</h1>
      <button onClick={HclickEvent}>Change Value </button>
    </div>
  )
}
