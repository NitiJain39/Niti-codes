import React from 'react'
import Address from './Address';
import AddressMap from './AddressMap';
import UserPersonalDetails from './UserPersonalDetails'
import { useDispatch } from 'react-redux';
import { deleteStudent } from '../app/StudentSlice';
export default function UserDetails({user}) {
  
   const dispatch = useDispatch()
    return (
    <div className='w-lg h-fit border border-amber-950 m-5 py-8 px-4'>
      <UserPersonalDetails  name={user.name} email={user.email}/>
      <Address address = {user.address}/><br />
      <AddressMap geo = {user.address.geo}/>
      <button className='w-38 h-15 border border-amber-950 bg-red-200 text-amber-950 text-xl text-center m-6 -mb-4 p-4'
      onClick={()=>dispatch(deleteStudent(user.id))}> Delete User
      </button>
    </div>
  )
}
