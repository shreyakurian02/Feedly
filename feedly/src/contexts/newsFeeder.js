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
      setNational(nationalData.data);

      const businessData = await axios.get("https://inshortsapi.vercel.app/news?category=business");
      setBusiness(businessData.data);

      const sportsData = await axios.get("https://inshortsapi.vercel.app/news?category=sports");
      setSports(sportsData.data);

      const worldData= await axios.get("https://inshortsapi.vercel.app/news?category=world");
      setWorld(worldData.data)

      const allData= await axios.get("https://inshortsapi.vercel.app/news?category=all");
      setAll(allData.data)

      const technologyData= await axios.get("https://inshortsapi.vercel.app/news?category=technology");
      setTech(technologyData.data)

      const scienceData= await axios.get("https://inshortsapi.vercel.app/news?category=science");
      setScience(scienceData.data)

      setLoading(false);
    }
    fetchNews()
    },[])

    // setLoading(false);
    // console.log(allNews)


      // const nationalData = await axios.get("https://inshortsapi.vercel.app/news?category=national");
      // console.log(nationalData.data.data)

      // const businessData = await axios.get("https://inshortsapi.vercel.app/news?category=business");
      // console.log(nationalData.data.data)

      // const sportsData = await axios.get("https://inshortsapi.vercel.app/news?category=sports");
      // console.log(nationalData.data.data)

      // const worldData= await axios.get("https://inshortsapi.vercel.app/news?category=world");
      // console.log(nationalData.data.data)


    //  if(allNews.length>0){
    //   setNational(allNews[3].data);
    //   setBusiness(allNews[2].data);
    //   setSports(allNews[4].data);
    //   setWorld(allNews[6].data);}



  // const getValue = () => {
  //   var array = []
  //   allNews.forEach((news)=>{
  //       if(news.category=="national")
  //       setNational(news.data)
  //       else if(news.category=="sports")
  //       setSports(news.data)
  //   })
  //   return [national,sports]
  // }

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









