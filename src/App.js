import React, {useEffect, useState } from "react";
 
// Import the "useState" and "useEffect" hooks from React
// Soo jiido "useState" iyo "useEffect"

// Import the "MyProfile" component
// Soo jiido "MyProfile" component-ka
import MyProfile from "./components/MyProfile"
// Import the "axios" library
// Soo jiido "axios" hoos
import axios from "axios";

import "./App.css";

function App() {

  // Create 3 states, "profile", "followers", and "following"
  // Samee 3 state, "profile", "followers", iyo "following"
  const [profile,setProfile] = useState([])
  const [followers,setFollowers] = useState([])
  const [following,setFollowing] = useState([])
  const [repositories,setRepositories] = useState([])


  // API For Profile = https://api.github.com/users/<your-github-username>
  // API for Followers = https://api.github.com/users/<your-github-username>/followers
  // API for Following = https://api.github.com/users/<your-github-username>/following
  

  // Use axios to fetch data from the API using the useEffect hook
  // Halkaan isticmaal axios adigoo kasoo jiidanaayo waxaa u baahantahay API, useEffect hook-na isticmaal
   
 

  useEffect(()=>{
    //profile
   axios.get("https://api.github.com/users/zayidmohamedy")
   .then((res)=>{
     setProfile(res.data)

   }).catch((error)=>{
    console.log(  error);
   })
  //  followers
   axios.get("https://api.github.com/users/zayidmohamedy/followers")
   .then((res)=>{
     setFollowers(res.data)

   }).catch((error)=>{
    console.log(  error);
   })

   //following
   axios.get("https://api.github.com/users/zayidmohamedy/following")
   .then((res)=>{
     setFollowing(res.data)

   }).catch((error)=>{
    console.log(  error);
   })

    //repositories
    axios.get("https://api.github.com/users/zayidmohamedy/repos")
    .then((res)=>{
      setRepositories(res.data)
 
    }).catch((error)=>{
     console.log(  error);
    })
  },[])
 

 
  //  console.log(profile);
  //  console.log(followers);
    // console.log(repositories);

  return (
    <div className="bg-white md:mx-auto rounded shadow-xl w-full md:w-1/2 overflow-hidden">
      <div className="h-[140px] bg-gradient-to-r from-cyan-500 to-blue-500"></div>

      {/* Show "MyProfile" component here and give it 3 props, "profile", "followers", and "following" */}
      {/* Halkaan soo gali "MyProfile", 3 props-na sii, "profile", "followers", iyo "following" */}
    
    <MyProfile profile={profile}  followers= {followers} following= {following} repositories={repositories}/>
    </div>
  );
}

export default App;
