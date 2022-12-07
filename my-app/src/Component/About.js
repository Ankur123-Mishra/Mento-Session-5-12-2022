import '../Component/About.css'
import React from "react";
import { useState } from "react";

export default function About(){

    useState(()=>{

        console.log("++ Mounted About");
        return ()=>{
            console.log("++ Un-Mounted About");
        };

    },[]);
    
    return <div className="About">
              <h1>About</h1>
        </div>
       

}