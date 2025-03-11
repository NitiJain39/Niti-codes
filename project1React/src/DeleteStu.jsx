import React, {useState} from 'react'
import StudentDetails from './assets/StudentDetails'
var Students=[
    {name:"Neha",surname:"Sharma", age:22, address:"Navkar Nagar",city:"Khandwa"},
    {name:"Ishika",surname:"Raichand",age:22, address:"Navkar Nagar",city:"Khandwa"},
    {name:"Riya",surname:"Gupta",age:22, address:"Navkar Nagar",city:"Khandwa"},
]
export default function DeleteStu() {
    const [listOfStudents, setlistOfStudents] = useState(Students)
    const deleteStudents= (index)=>{
        listOfStudents.splice(index, 1)
        setlistOfStudents([...listOfStudents])
    }
    return (
    <div>
      {
        listOfStudents.map((data ,i) =>
            <div><StudentDetails
            name={data.name}
            surname={data.surname}
            age={data.age}
            address={data.address}
            city={data.city}
            index={i}
            deleteEntry={deleteStudents}
            />
            {/* <button onClick={()=> deleteStudents(i)}>Delete</button>     */}
            </div>
        )
      }
    </div>
  )
}
