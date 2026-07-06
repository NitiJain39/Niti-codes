import React from 'react'
import { Link } from 'react-router'
import Vertical_Slider from './Vertical_Slider'

export default function Projects() {
  return (
<div className="text-amber-100 h-[100%] w-full pb-24 text-center p-5">
  <h1 className='text-2xl mb-20'>Projects using MERN : </h1>
  <Vertical_Slider />

</div>
  )
}
