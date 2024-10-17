"use client"

import { useEffect, useState } from "react"

export default function page({params}){
    let id  =  params.userid
    
    const[name,setName]=useState("")
    const[age,setAge]=useState("")
    const[email,setEmail]=useState("")

    useEffect(()=>{
        getUserDetail()
    },[])

    const getUserDetail= async ()=>{
        let data = await fetch("http://localhost:3000/api/users/"+id)
        data = await data.json()
        setName(data.result.name)
        setAge(data.result.age)
        setEmail(data.result.email)

    
    }

    const updateUser = async ()=>{
        let result = await fetch("http://localhost:3000/api/users/"+id,{
            method:"PUT",
            body:JSON.stringify({name,age,email})
        })
        result = await result.json()
        console.log(result)
        if(result.success){
            alert("updated")
        }else{
            alert("try again")
        }
    }
    
    return(
        <div>
            <h1>
             update   user detail
            </h1>
            <input type="text" value={name} placeholder="Enter name" onChange={(e)=>setName(e.target.value)}></input>
            <input type="text" value={age} placeholder="Enter age" onChange={(e)=>setAge(e.target.value)}></input>
            <input type="text" value={email} placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}></input>
            <button onClick={updateUser}> update user</button>
        </div>
    )
}