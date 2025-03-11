import React, { useState } from 'react'
import ShowContact from './ShowContact'

export default function AddContact() {
    const [ContactList, setContactList] = useState([])
    const [searchcontact, setSearchcontact]=useState("")
    const [name, setName] = useState("")
    const [surname, setSurName] = useState("")
    const [email, setemail] = useState("")
    const [contact, setContact] = useState("")
    const [address, setAddress] = useState("")

    const searchList=ContactList.filter((suggestion)=>
    suggestion.name.toLowerCase().startsWith(searchcontact.toLowerCase())
    )
    return (
        <>
        <div className=''>
            <input type="text" placeholder='Search here...' className='border border-slate-800 w-10/12 h-7 p-3 rounded-2xl' 
            onChange={(s)=> setSearchcontact(s.target.value)} value={searchcontact}/>
        </div>
        <div className='flex gap-14'>
            <div className='w-72 h-96 p-5 m-5 text-center border rounded-md border-gray-600 shadow-lg shadow-gray-700'>
                <input type="text" className='text-center border rounded-xl border-amber-950 text-lg text-black mb-5' placeholder='Enter name' 
                onChange={(e) => setName(e.target.value)} value={name}/><br/>
                <input type="text" className='text-center border rounded-xl border-amber-950 text-lg text-black mb-5' placeholder='Enter Surname' 
                onChange={(e) => setSurName(e.target.value)} value={surname}/><br/>
                <input type="text" className='text-center border rounded-xl border-amber-950 text-lg text-black mb-5' placeholder='Enter email' 
                onChange={(e) => setemail(e.target.value)} value={email}/><br/>
                <input type="text" className='text-center border rounded-xl border-amber-950 text-lg text-black mb-5' placeholder='Enter contact' 
                onChange={(e) => setContact(e.target.value)} value={contact}/><br/>
                <input type="text" className='text-center border rounded-xl border-amber-950 text-lg text-black mb-5' placeholder='Enter Address' 
                onChange={(e) => setAddress(e.target.value)} value={address}/><br/>
                <button className=" w-40 text-center border border-black rounded-lg p-2 m-2" onClick={()=>{
                    setContactList([...ContactList,
                        {
                            name: name,
                            surname: surname,
                            email: email,
                            contact: contact,
                            address: address
                        }
                    ])
                }}>Submit</button>
            </div>
            <div>{
                searchList.map((data,i)=><div>
                <ShowContact
                name={data.name}
                surname={data.surname}
                email={data.email}
                contact={data.contact}
                address={data.address}
                />
                {
                    localStorage.setItem("Save",JSON.stringify(ContactList))
                }
                
                </div> )
            }
            </div>
            </div>
            </>
    )
}
