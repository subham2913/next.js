"use client"

import { user } from "./db"

export default function DeleteUser(props){
    const userId= props.id

    console.log(userId)
    const deleteuser = async ()=>{
        let result = await fetch ("http://localhost:3000/api/users"+userId,{
            method: "DELETE"
        })
        result = await result.json()
        if(result.success){
            alert("user deleted")
        }
    }
    return(
        <div>
            <button onClick={deleteuser} >delete user</button>
        </div>
    )
}