import React, { useState} from 'react'
import ShowContact from './ShowContact'
import { FaMagnifyingGlass } from "react-icons/fa6";
export default function AddContact() {
    const [ContactList, setContactList] = useState([])
    const [searchcontact, setSearchcontact] = useState("")
    const [name, setName] = useState("")
    const [surname, setSurName] = useState("")
    const [email, setemail] = useState("")
    const [contact, setContact] = useState("")
    const [address, setAddress] = useState("")

    const searchList = ContactList.filter((suggestion)=>
    suggestion.name.toLowerCase().startsWith(searchcontact.toLowerCase())
    )
    const deleteStudents= (index) =>{
        const savedContacts = JSON.parse(localStorage.getItem("Save")) || [];
        ContactList.splice(index, 1)
        setContactList([...ContactList])
        localStorage.setItem("Save", JSON.stringify(ContactList));
    }

    // Save new contact to localStorage and update the contact list
    const handleSubmit = (e) => {
        e.preventDefault();
        const newContact = {
            name: name,
            surname: surname,
            email: email,
            contact: contact,
            address: address,
        };
        setContactList((ContactList) => {
            ContactList = [...ContactList, newContact];
            localStorage.setItem("Save", JSON.stringify(ContactList));
            return ContactList;
        });
        setName("");
        setSurName("");
        setemail("");
        setContact("");
        setAddress("");
        };

    return (
        <>
        <div className='m-5 items-center text-center justify-center flex gap-2'>
            <div className='w-10 h-10 mr-4'></div>
            <input type="text" placeholder='Search Contacts here...' className='pl-10 border border-slate-800 w-9/12 h-12 p-3 rounded-2xl' 
            onChange={(s)=> setSearchcontact(s.target.value)} value={searchcontact}/><h1 className='rounded-2xl w-16 h-10 bg-blue-500 text-white text-center items-center justify-center px-4 py-3'><FaMagnifyingGlass/></h1>
        </div>
        <div className='w-full bg-blue-600 text-2xl text-neutral-50 pl-20 py-3 mb-4 mx-0'> Contacts</div>
        <div className='flex gap-12'>
            <div className='w-xl h-fit py-5 px-8 m-5 text-center border rounded-md border-gray-600 shadow-lg shadow-gray-700'>
                <h1 className='text-xl mb-5'>Add Contact</h1>
                <form>
                <input type="text" className='text-center w-2xs border rounded-xl border-amber-950 text-lg text-black mb-5' placeholder='Enter name' 
                onChange={(e) => setName(e.target.value)} value={name}/><br/>
                <input type="text" className='text-center w-2xs border rounded-xl border-amber-950 text-lg text-black mb-5' placeholder='Enter Surname' 
                onChange={(e) => setSurName(e.target.value)} value={surname}/><br/>
                <input type="email" className='text-center w-2xs border rounded-xl border-amber-950 text-lg text-black mb-5' placeholder='Enter email' 
                onChange={(e) => setemail(e.target.value)} value={email}/><br/>
                <input type="tel" className='text-center w-2xs border rounded-xl border-amber-950 text-lg text-black mb-5' placeholder='Enter contact number' 
                onChange={(e) => setContact(e.target.value)} value={contact}/><br/>
                <input type="text" className='text-center w-2xs border rounded-xl border-amber-950 text-lg text-black mb-5' placeholder='Enter Address' 
                onChange={(e) => setAddress(e.target.value)} value={address}/><br/>
                <button className=" w-40 text-center border border-black rounded-lg p-2 m-2" onClick={handleSubmit}>
                    Submit
                </button>
                </form>
            </div>
            <div className='w-full mx-10'>
            <div className='text-left'> 
            <button className="w-40 text-center border border-black rounded-lg p-2 m-2" onClick={
                () => setContactList(JSON.parse(localStorage.getItem("Save")) || [])
            }>Contacts List</button></div><br />
            <div className='h-15 grid grid-cols-5 justify-center pt-3 pl-7 font-semibold font-serif border-b border-b-black'>
                <h1>Fullname </h1><h1>Email</h1><h1 className='-ml-2'>Contact Number</h1><h1 className='ml-8'>Address</h1>
            </div>
            {
                searchList.map((data,i)=><div key={i}>
                <ShowContact
                name={data.name}
                surname={data.surname}
                email={data.email}
                contact={data.contact}
                address={data.address}
                index={i}
                deleteEntry={deleteStudents}
                />
                </div> )
            }
            </div>
        </div>
        </>
    )
}
