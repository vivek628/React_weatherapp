import React, { useEffect, useState } from "react";
import "./Rightside.css"
import axios from "axios";
import { CiCloudSun } from "react-icons/ci";
import { MdOutlineWbSunny } from "react-icons/md";
function Right()
{
    let k='52d459dad89bf87251c7e32f2f01629a';
   
    let unit="matric"
    let [cityname,setCity]=useState("delhi")
    let [citydata,setcitydata]=useState([])
    let[speed,setspeed]=useState([])
    let[visiblity,setvisiblity]=useState([])
   
    useEffect(()=>{
        get()
    },[])
    async function get()
    {
        try{
            let response=await  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${k}&units=${unit}`)
            let data=response.data
           
            console.log("data",data.visibility)
            setcitydata(data.main)
            console.log("wgole",data.wind)
            setspeed(data.wind)
            console.log("winddata",citydata)
          
            
            setvisiblity(data.visibility)
            console.log("visi",visiblity)
           
           
            console.log("wind" )
           
          
        }
    
   catch(err)
   {
    console.log(err)
   }

}
console.log(cityname)
    return(
        <div className="right-inside">
         <h1 style={{fontSize:"40px", paddingTop:"10px"}}>{false?(<CiCloudSun></CiCloudSun>):(<MdOutlineWbSunny></MdOutlineWbSunny>)}</h1>
         <div className="s">
         <input placeholder="SEARCH ANY CITY" onChange={(e)=>setCity(e.target.value)} type="text"></input>
         <button onClick={()=>{get()}}>check</button>
         </div>
         
         <div className="wdata">
            <div className="cityname">
            <p>{cityname}</p>
        </div>
            
        <div className="details">
          <h3>Temprature</h3>
          <p>{citydata.temp} k</p>
        </div>   
        
        <div className="details">
        <h3>Humidity</h3>  
         <p>{citydata.humidity}g/m3 </p>
            </div> 
         <div className="details">
         <h3>Visiblity</h3>
         <p>{visiblity} m</p>
         </div>
        <div className="details">
        <h3>Wind Speed</h3>
       <p>{speed.speed} m/s</p>
        </div>
        
         </div>
      
        </div>
    )
}
export default Right