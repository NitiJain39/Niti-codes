import React, { useState } from 'react'
import StudentDetails from './assets/StudentDetails'
var Students=[
    // {name:"Neha",surname:"Sharma", age:22, address:"Navkar Nagar",city:"Khandwa"},
    // {name:"Ishika",surname:"Raichand",age:22, address:"Navkar Nagar",city:"Khandwa"},
    // {name:"Riya",surname:"Gupta",age:22, address:"Navkar Nagar",city:"Khandwa"},
]
export default function InputUdate() {
    const [ListStudents, setListStudents] = useState(Students)
    const [name, setName] = useState("")
    const [surname, setSurName] = useState("")
    const [age, setAge] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    return (
        <div className='text-lg text-black'>
            <input type="text" className='border border-amber-950 text-lg text-black mb-5 mr-4' placeholder='Enter name' 
            onChange={(e) => setName(e.target.value)} value={name}/>
            <input type="text" className='border border-amber-950 text-lg text-black mb-5' placeholder='Enter Surname' 
            onChange={(e) => setSurName(e.target.value)} value={surname}/><br/>
            <input type="text" className='border border-amber-950 text-lg text-black mb-5' placeholder='Enter Age' 
            onChange={(e) => setAge(e.target.value)} value={age}/><br/>
            <input type="text" className='border border-amber-950 text-lg text-black mb-5 mr-4' placeholder='Enter Address' 
            onChange={(e) => setAddress(e.target.value)} value={address}/>
            <input type="text" className='border border-amber-950 text-lg text-black mb-5' placeholder='Enter City' 
            onChange={(e) => setCity(e.target.value)} value={city}/><br/>
            <button onClick={()=>{
                setListStudents([...ListStudents,
                    {
                        name: name,
                        surname: surname,
                        age: age,
                        address: address,
                        city: city
                    }
                ])
            }}>Submit</button>
            {
                ListStudents.map((data,i)=> <StudentDetails
                name={data.name}
            surname={data.surname}
            age={data.age}
            address={data.address}
            city={data.city}/>)
            }

        </div>
  )
}
