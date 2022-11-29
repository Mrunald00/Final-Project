import React, { useEffect, useState } from "react";
import BubbleChart from "./BubbleChart";
import ScatterPlot from "./ScatterPlot";



const Homepage = () =>{

    //state of this component
    const [data,setData] = useState([]);

    //component did mount
    useEffect(()=>{
    (async() =>{
    const data =  await getpersondata();
    setData(data);
    })()
        
    },[]);

    //get data from api
    async function getpersondata() 
    {
    const api_url = 'https://api.pantheon.world/person';
    const response = await fetch(api_url);
    return response.json();
    }

    console.log(data);


    return(
        <div>
      <h1> The distribution of influencial females based on geography</h1>
      <BubbleChart person_data={data}/>

      <h1> The rise of women in history over years from 3500BC till today</h1>

            <ScatterPlot person_data={data}/> 
        </div>
    )
}

export default Homepage;