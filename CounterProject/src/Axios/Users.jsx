import React, { useEffect } from 'react'
import UserDetails from './UserDetails'
import { useDispatch , useSelector } from 'react-redux'
import { FetchUsers, selectUser } from '../app/StudentSlice'
export default function Users() {
const dispatch = useDispatch()
const {list,selectuser,isLoading,error} = useSelector(state => state.user)
// const selectuser = useSelector(state => state.user.selectuser)

// const [listOfUser, setListOfUser]= useState([])
// const [selectuser, setSelectuser]= useState([null]) :- Moving selectuser state to slice file
    useEffect(()=>{
      dispatch(FetchUsers())
        // async function getData(){
        //     let response= await axios.get("https://jsonplaceholder.typicode.com/users")
       
        //     if(response.status===200){
        //         setListOfUser(response.data)
        //     }
        // }
        // getData()
    
    },[])

  return (
    <div className='flex gap-16'>
      <div className='w-md bg-[#b9eaf7] px-8 py-4 m-4'>
      { isLoading ? <h1 className='text-2xl'>Loading... </h1>
        :list.map((user)=>
            // <div key={user.id} onClick={()=>{setSelectuser(user)}}>
            <div key={user.id} onClick={()=>{dispatch(selectUser(user))}} className="text-center m-4 py-3 px-8 rounded-md border border-amber-950 hover:bg-blue-200">
                <h1>id: {user.id} </h1>
                <h1>name: {user.name}</h1>
            </div>
            ) }
      {
        error && <h1 className='text-3xl'> Something went wrong <br />
        Please check your code.</h1>
      }
      </div>
      {
      selectuser!=null && 
      <div>
        <UserDetails user={selectuser}/>

      </div>
      }
    
    </div>
    
  )
}
