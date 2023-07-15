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

  const [profile,setProfile]=useState([])
  const [followers,setFollowers]=useState([])
  const [ following,setFollowing]=useState([])
  
  useEffect(() => {
    axios.get('https://api.github.com/users/masuud-ahmed')
     
    .then((res) =>{
      setProfile(res.data)
      // console.log(profile)
      // // setprofile(res.data)
      
     
    })
    
    .catch((res)=>{
      console(res.data,'res')
    })
    axios.get('https://api.github.com/users/masuud-ahmed/followers')
    .then((resa)=>{
      setFollowers(resa.data)
      // console.log("resa",resa.data)

    })
  .catch((resa)=>{
console.log(resa.data, "resa")
  })
  axios.get('https://api.github.com/users/masuud-ahmed/following')
  .then((resa1)=>{
    // console.log("resa1",resa1.data)
    setFollowing(resa1.data)
  })
  .catch((resa1)=>{
    console.log(resa1.data, "resa1")
      })
  },[]);
  
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
        {/* console.log(MyProfile) */}

      </div>
      </div>
      
    
);
  }


export default App ;
