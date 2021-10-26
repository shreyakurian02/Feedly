import React,{useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import Landing from './Landing';

const App = ()  => {
  // const [sports, setSports] = useState([]);
  // const [national,setNational] = useState([]);
  // const [business,setBusiness] = useState([]);
  // const [world,setWorld] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      // setLoading(true);
      // const businessData = await axios.get("https://inshortsapi.vercel.app/news?category=business");
      // const sportsData = await axios.get("https://inshortsapi.vercel.app/news?category=sports");
      // // const nationalData = await axios.get("https://inshortsapi.vercel.app/news?category=national");
      // const worldData= await axios.get("https://inshortsapi.vercel.app/news?category=world");
      // setBusiness(businessData);
      // setSports(sportsData);
      // // setNational(nationalData);
      // setWorld(worldData);
      // setLoading(false);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <Landing/>
    </div>
  )
}

export default App;
