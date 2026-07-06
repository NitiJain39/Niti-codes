import StudentDetails from "./assets/StudentDetails"

var Students=[
    {name:"Neha",surname:"Sharma", age:22, address:"Navkar Nagar",city:"Khandwa"},
    {name:"Ishika",surname:"Raichand",age:22, address:"Navkar Nagar",city:"Khandwa"},
    {name:"Riya",surname:"Gupta",age:22, address:"Navkar Nagar",city:"Khandwa"},
]
export default function Student(){
    return(
        <div>
        {
            Students.map((data, i) =>
                <StudentDetails
                name={data.name}
                surname={data.surname}
                age={data.age}
                address={data.address}
                city={data.city}/>
            )
        }
        </div>
    )
}