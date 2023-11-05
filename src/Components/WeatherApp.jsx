import React,{useState} from "react";
import clearIcon from"./Assets/clear.png";
import cloudIcon from"./Assets/cloud.png";
import drizzleIcon from"./Assets/drizzle.png";
import rainIcon from"./Assets/rain.png";
import snowIcon from"./Assets/snow.png";
import SearchBar from "./SearchBar.jsx";
import WeatherData from"./WeatherData.jsx"





let previous;
function WeatherApp()
{

    const[iconName,setIconName]=useState()
    let[tempinfo,settempinfo]=useState(
        { temp:"",humidity:"",windspeed:"",iconweather:"",city:""});


function getTempInformation(temp,humidity,windspeed,iconweather,city)
{



   

    settempinfo((prev)=>{

    return{
        ...prev,
        ["temp"]:Math.floor(temp),
        ["humidity"]:humidity,
        ["windspeed"]:Math.floor(windspeed),
        ["iconweather"]:iconweather,
        ["city"]:city
                        };
        }
        );

        if(iconweather==="Clear")
        {
            setIconName(clearIcon);
        }
        
       else if(iconweather==="Drizzle")
        {
            setIconName(drizzleIcon);
        }

       else if(iconweather==="Rain")
        {
            setIconName(rainIcon);
        }

       else if(iconweather==="Snow")
        {
            setIconName(snowIcon);
        }

       else if(iconweather==="Clouds")
        {
            setIconName(cloudIcon);
        }


}

        if(tempinfo.city!==undefined)
        {
            previous=tempinfo;

        }

    return(
    <div className="Conatainer">
        <SearchBar getData={getTempInformation}></SearchBar>

    
        <div className="weather-image">
            <img src={iconName} alt="" />
        </div>

        <div className="weather-temp">
            <h1>{previous.temp}</h1>
        </div>

        <div className="weather-location">
            <h2>{previous.city.slice(0,1).toUpperCase()+previous.city.slice(1).toLowerCase()}</h2>
        </div>

      <WeatherData humidity={previous.humidity} windspeed={previous.windspeed} weatherdescription={previous.iconweather} ></WeatherData>
   

    </div>
    );
    
}

export default WeatherApp;