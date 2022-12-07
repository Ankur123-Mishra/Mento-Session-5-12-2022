import './../Component/Home.css'
import React from "react";
import { useState } from "react";

export default function Home(){

    useState(()=>{

        console.log("++ Mounted Home");
        return ()=>{
            console.log("++ Un-Mounted Home");
        };

    },[]);
    
    return <div className="Home">
               <h1>Home</h1>
          </div>
       

}