import React from 'react';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';


const App = () => {
    const [advice,setAdvice] = useState("Hi");
    console.log(advice);

    useEffect(()=>{
        console.log("initial render");
        fetchAdvice();
    },[])
    
    const fetchAdvice = () =>{
        const id= Math.floor(Math.random() * 100) - 1

        axios.get(`https://api.adviceslip.com/advice/${id}`)
  
        .then((response)=>{
            //console.log(response.data.slip);
            console.log(response.data.slip.advice);
            setAdvice(response.data.slip.advice);
            
            
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    
  return <>
      <div className='app'>
          <div className='card'>
              <div className='heading'>
                    <h1>{advice}</h1>
                    <button className='button' onClick={fetchAdvice}>
                        <span>Generate</span>
                    </button>
              </div>
          </div>
      </div>
      </>;
};

export default App;
