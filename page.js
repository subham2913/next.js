"use client"
import Script from "next/script";

export default function page (){
  return(
    <div>
      <Script 
      src="/location.js"
      onLoad={()=>{
        console.log("file loaded")
      }}
      />
      <button onClick={()=>{getLocation()}} >try it </button>
      <h2>get your location</h2>
      
    </div>
  )
}