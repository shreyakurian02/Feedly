import React,{useEffect, useState,createContext} from 'react';
import axios from 'axios';
import { PageLoader } from "@bigbinary/neetoui/v2";


export const NewsContext = createContext()

export const NewsFeeder = (props) => {

  const [loading, setLoading] = useState(true);
  const [all,setAll] = useState([]);
  const [technology,setTech] = useState([]);
  const [science,setScience] = useState([]);
  const [national,setNational] = useState([]);
  const [sports, setSports] = useState([]);
  const [business,setBusiness] = useState([]);
  const [world,setWorld] = useState([]);


  useEffect(() => {

    const fetchNews = async () => {
      setLoading(true);

      const nationalData = await axios.get("https://inshortsapi.vercel.app/news?category=national");
      console.log(nationalData)
      setNational(nationalData.data);

      const businessData = await axios.get("https://inshortsapi.vercel.app/news?category=business");
      console.log(businessData)
      setBusiness(businessData.data);

      const sportsData = await axios.get("https://inshortsapi.vercel.app/news?category=sports");
      console.log(sportsData)
      setSports(sportsData.data);

      const worldData= await axios.get("https://inshortsapi.vercel.app/news?category=world");
      console.log(worldData)
      setWorld(worldData.data)

      const allData= await axios.get("https://inshortsapi.vercel.app/news?category=all");
      console.log(allData)
      setAll(allData.data)

      const technologyData= await axios.get("https://inshortsapi.vercel.app/news?category=technology");
      console.log(technologyData)
      setTech(technologyData.data)

      const scienceData= await axios.get("https://inshortsapi.vercel.app/news?category=science");
      console.log(scienceData)
      setScience(scienceData.data)

      setLoading(false);
    }
    fetchNews()
    },[])


  if(loading)
  return (
    <div className="h-screen">
      <PageLoader />
    </div>
  );


  return (
    <>
    <NewsContext.Provider value={[national,sports,business,world,technology,science,all]}>

      {props.children}
    </NewsContext.Provider>
    </>
  )
}









