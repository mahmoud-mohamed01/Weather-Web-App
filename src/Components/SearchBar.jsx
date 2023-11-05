import React,{useState,useEffect} from "react";
import searchIcon from"./Assets/search.png";
import axios from 'axios';

//temp cities data
let data=["Cairo","Kuwait","London","New york","Dubai","Amsterdam","Alexandria","Munich","Liverpool","Washington","Seattle","Ridah","Madrid"]



function SearchBar(props)
{
    useEffect(() => {
        let ignore = false;
        
        if (!ignore)  handleSearch()
        return () => { ignore = true; }
        },[]);


    let[cityName,setCityName]=useState("cairo") //set intial value
    let[dropdownflag,setflag]=useState(false); //use this to handle dropdown show when start typing


    function get_name(event)
        {
            setflag(true);  //set the dropdown to be visible 
            setCityName(event.target.value)
        }


    async function handleSearch()
    {

        //fetch weather information from openweather Api
        try{
        let tempInformation= await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=0ffe3f5e2d28a584095b62268aad35b9`);
        let temp=tempInformation.data.main.temp;
        let wind=tempInformation.data.wind.speed;
        let humidity=tempInformation.data.main.humidity;
        let iconweather=tempInformation.data.weather[0].main;
        props.getData(temp,humidity,wind,iconweather,cityName);}
        
        catch(error)
        {
            console.log(error);
        }
    
    }

    //handle user clicks on the dropdown search items
     function getSuggestedName(event) 
    {
         setCityName(event.target.innerText);
         setflag(false)
    }


   

    return( 
    <div  className="top-bar">
        <div className="thee search">
        <input  onFocus={()=>{setflag(true)}} spellCheck={false} value={cityName} onChange={get_name} type="text" className="search-city" placeholder="enter city name"></input>
        <div className="dropdown" style={dropdownflag?{display:"block"}:{display:"none"}}>
            {data.map((item,idx)=>
                {let name=cityName;
                    if(name)
                    {
                    if(item.toLowerCase().startsWith(name.toLowerCase()))
                    {
                        return <div key={idx} onClick={getSuggestedName} className="dropdownrow"> {item}</div>
                    }
                    }
                }) }
        </div>
        </div>
        <div onClick={handleSearch} className="search-icon">
            <img src={searchIcon} alt="" />
        </div>
       
    </div>  )
}


export default SearchBar;