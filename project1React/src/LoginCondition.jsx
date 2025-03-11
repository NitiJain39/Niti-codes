import React, {useState} from 'react'


export default function LoginCondition() {
  const [isloggedIn,SetIsloggedIn]= useState(false)
  return (
    <div>
        <div>
        {
          isloggedIn?"Home":"Login"
        }
          <br />
          <button onClick={()=> SetIsloggedIn(!isloggedIn)}>Login Change</button>  

        </div>
    </div>
  )
}
// function getPage(){
//     if (isloggedIn) return <div>
//         <h1>Home Page</h1>
//     </div>
//     else return <div>
//         <h1>Login Page</h1>
//     </div>
// }

// export default function LoginCondition() {
//   return (
//     <div>
//       {
//         getPage()
//       }
//     </div>
//   )
// }
