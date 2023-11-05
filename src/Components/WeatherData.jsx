import React from "react";
import humidtyIcon from"./Assets/humidity.png";
import windIcon from"./Assets/wind.png";

function WeatherData(props)
{
    return(<div className="weather-data" >
            
    <div className="element">
        <img src={humidtyIcon} alt=""  className="icon"/>
        <div className="data">
            <p>{props.humidity}%</p>
            <p className="sec-text">Humidity</p>
        </div>
    </div>
    
    <div className="element">
        <div className="data">
            <p style={{marginLeft:"15px"}}>{props.weatherdescription} </p>
        </div>
    </div>

    <div className="element">
        <img src={windIcon} alt=""  className="icon"/>
        <div className="data">
            <p>{props.windspeed} km/h</p>
            <p className="sec-text">Wind Speed</p>
        </div>
    </div>

</div>)
}

export default WeatherData;