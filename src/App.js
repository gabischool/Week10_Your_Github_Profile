import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Import the "useState" and "useEffect" hooks from React
// Soo jiido "useState" iyo "useEffect"

// Import the "MyProfile" component
// Soo jiido "MyProfile" component-ka

// Import the "axios" library
// Soo jiido "axios" hoos

import "./App.css";
import MyProfile from "./components/MyProfile";
import axios from "axios";

function App() {
  const [ProfileData, setProfileData] = useState({});
  const [loading, setloading] = useState(false)
  useEffect(() => {
    setloading(true)
    const apiUrl = `https://api.github.com/users/Cleverprogramer`;
    axios.get(apiUrl).then((response) => {
      setProfileData(response.data);
      setloading(false)
    })
  }, []);

  // Create 3 states, "profile", "followers", and "following"
  // Samee 3 state, "profile", "followers", iyo "following"


  // API For Profile = https://api.github.com/Cleverprogramer/>
  // API for Followers = https://api.github.com/users/<your-github-username>/followers
  // API for Following = https://api.github.com/users/<your-github-username>/following

  // Use axios to fetch data from the API using the useEffect hook
  // Halkaan isticmaal axios adigoo kasoo jiidanaayo waxaa u baahantahay API, useEffect hook-na isticmaal

  return (
    <div className="bg-white md:mx-auto rounded shadow-xl w-full md:w-1/2 overflow-hidden">
      <div className="h-[140px] bg-gradient-to-r from-cyan-500 to-blue-500"></div>
      <Router>
        <MyProfile ProfileData={ProfileData} loading={loading} />
        <Routes>
          {/* <Route path="/" element={<h2>wec</h2>} /> */}
          {/* <Route path="/" element={<FollowersList />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
