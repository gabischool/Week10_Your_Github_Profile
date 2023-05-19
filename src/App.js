import React,{ useEffect,useState} from 'react'
 import MyProfile from './components/MyProfile';
import axios from 'axios'

// Import the "useState" and "useEffect" hooks from React
// Soo jiido "useState" iyo "useEffect"

// Import the "MyProfile" component
// Soo jiido "MyProfile" component-ka

// Import the "axios" library
// Soo jiido "axios" hoos
import  './App.css';

 

function App() {
  useEffect(() => {
    axios.get('https://api.github.com/users/masuud-ahmed')
    .then((res) =>{
      console.log('res',res.data)
      
      
    })
    .catch((res)=>{
      console(res,'res')
    })
    axios.get('https://api.github.com/users/masuud-ahmed/followers')
    .then((resa)=>{
      console.log(resa, resa.data)

    })
  .catch((res)=>{

  })
  axios.get(' https://api.github.com/users/masuud-ahmed/following')
  .then((resa1)=>{
    console.log(resa1.data)
  })
  },[]);
  const [profile,setprofile]=useState()
  const [followers,setfollowers]=useState()
  const [ following,setfollowing]=useState()
  // Create 3 states, "profile", "followers", and "following"
  // Samee 3 state, "profile", "followers", iyo "following"


  // API For Profile = https://api.github.com/users/<your-github-username>
  // API for Followers = https://api.github.com/users/<your-github-username>/followers
  // API for Following = https://api.github.com/users/<your-github-username>/following

  // Use axios to fetch data from the API using the useEffect hook
  // Halkaan isticmaal axios adigoo kasoo jiidanaayo waxaa u baahantahay API, useEffect hook-na isticmaal
    
  return (
    <div className="bg-white md:mx-auto rounded shadow-xl w-full md:w-1/2 overflow-hidden"> 
      <div className="h-[140px] bg-gradient-to-r from-cyan-500 to-blue-500"> </div>
      {/* Show "MyProfile" component here and give it 3 props, "profile", "followers", and "following" */}
      {/* Halkaan soo gali "MyProfile", 3 props-na sii, "profile", "followers", iyo "following" */}
      <div>

      <MyProfile profile={profile}  followers={followers} following={following}/>

      </div>
      </div>
      
    
);
  }


export default App ;
