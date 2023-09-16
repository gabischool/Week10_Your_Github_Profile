import React from "react";

// Import the "useState" and "useEffect" hooks from React
import axios from "axios";
import { useState,useEffect } from "react";
import MyProfile from "./components/MyProfile";
import {Routes,Route ,Link,useLocation } from "react-router-dom"

// Soo jiido "useState" iyo "useEffect"


// Import the "MyProfile" component
// Soo jiido "MyProfile" component-ka

// Import the "axios" library
// Soo jiido "axios" hoos

import "./App.css";
import FollowersList from "./components/followers/FollowersList";

function App() {

  useEffect(()=> {

    axios.get("https://api.github.com/users/duraanali")
    .then((res) => {
      setprofile(res.data
)


  



    })


    axios.get("https://api.github.com/users/duraanali/followers")
    .then((res) => {

    
    setfallowers(res.data)
    } )

     const xaan = axios.get("https://api.github.com/users/duraanali/following")
    .then((res) => {
   


      setfllowing(res.data)
    } )

  

  },[])
  const [profile , setprofile]  = useState("")
const [followers , setfallowers]  = useState([])
const [fllowing , setfllowing]  = useState([])

  // Create 3 states, "profile", "followers", and "following"
  // Samee 3 state, "profile", "followers", iyo "following"


  // API For Profile = https://api.github.com/users/<your-github-username>
  // API for Followers = https://api.github.com/users/<your-github-username>/followers
  // API for Following = https://api.github.com/users/<your-github-username>/following

  
  // Use axios to fetch data from the API using the useEffect hook
  // Halkaan isticmaal axios adigoo kasoo jiidanaayo waxaa u baahantahay API, useEffect hook-na isticmaal

    
  return (
    <div className="bg-white md:mx-auto rounded shadow-xl w-full md:w-1/2 overflow-hidden">
      <div className="h-[140px] bg-gradient-to-r from-cyan-500 to-blue-500"></div>
      <MyProfile   profile ={profile}   fllowing = {fllowing}  followers = {followers}/>
   


  
      {/* Show "MyProfile" component here and give it 3 props, "profile", "followers", and "following" */}
      {/* Halkaan soo gali "MyProfile", 3 props-na sii, "profile", "followers", iyo "following" */}

    </div>
  );
}

export default App;
