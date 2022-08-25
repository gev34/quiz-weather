import {useState } from "react"
import React from "react";
import "./GetData.css"
 

function GetData(){

   const [value , setValue] = useState("");
   const [data , setData] = useState();
  //  console.log(value)

  const weatherGet = () => {
    
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=50a7aa80fa492fa92e874d23ad061374`)
        .then((data) => data.json())
        .then((results) => setData(results));   
  }

  


    function ShowWeather(){
      if(data !== undefined){
       console.log(data)
      return(
        <div className="dataInfo">
          <div>Name : {data.name}</div>
          <div>Sky : {data.weather[0].description}</div>
          <div>Celsius: {Math.floor(data.main.temp - 273)}</div>
          <div>Wind deg: {data.wind.deg}</div>
          <div>Wind speed: {data.wind.speed}</div>
        </div>
      )
      }
    }

    return(
      <div>
        <input type="text" value = {value} onChange = {(e) => setValue(e.target.value)} />
        <button onClick={() => weatherGet()}>Get Weather</button>
        <ShowWeather/>
      </div>
    )
}
export default GetData;