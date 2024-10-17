"use client"

import { useState } from "react"


export default function (){
    const [name,setName]= useState("")
    const [email,setEmial]= useState("")
    const [age,setAge]= useState("")

    const addUser = async()=>{
        let respone = await fetch("http://localhost:3000/api/users",{
        method: "post",
        body:JSON.stringify({name,email,age})
        });
        respone = await respone.json()
        console.log(respone)
    }

    return(
        <div>
            <h1>Add user</h1>
            <input type="text" value={name} placeholder="Enter Name" onChange={(e)=>setName(e.target.value)} />
            <input type="text" value={email} placeholder="Enter Email" onChange={(e)=>setEmial(e.target.value)}/>
            <input type="text" value={age} placeholder="Enter Age" onChange={(e)=>setAge(e.target.value)} />
            <button onClick={addUser}>Add User</button>
        </div>
    )
}