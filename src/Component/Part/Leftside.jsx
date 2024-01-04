import React from "react";
import "./Leftside.css"
import { useEffect,useState } from "react";
import axios from "axios"
function Left()
{ const [location,setLocation]=useState({})

useEffect(() => {
    getLocation()
  },[]);
    
let date=new Date().toLocaleDateString();
let time=new Date().toLocaleTimeString();
 async function getLocation()
  {
    try{
        let response=await axios.get("https://ipapi.co/json")
        let data=response.data
        setLocation(data)
    }
    catch(err)
    {
        console.log(err)
    }
  }

   


    return(
        <>
          <div className="time-date">
            
            <h1>{date}</h1>
            <h1>{time}</h1>
        </div>
        <div className="location">
          <h1>{location.city}</h1>
          <h1>{location.region}</h1>
        </div>
        </>
         
         
        
 
    )
}
export default Left 