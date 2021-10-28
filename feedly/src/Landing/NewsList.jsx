import React,{useEffect, useState} from 'react';
import '../App.css';
import axios from 'axios';
import NewsCard from './NewsCard';
import { Typography,PageLoader } from "@bigbinary/neetoui/v2";

const NewsList = () => {
  const [loading, setLoading] = useState(true);
  const [national,setNational] = useState([]);
  const [sports, setSports] = useState([]);
  const [business,setBusiness] = useState([]);
  const [world,setWorld] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      const nationalData = await axios.get("https://inshortsapi.vercel.app/news?category=national");
      const businessData = await axios.get("https://inshortsapi.vercel.app/news?category=business");
      const sportsData = await axios.get("https://inshortsapi.vercel.app/news?category=sports");
      const worldData= await axios.get("https://inshortsapi.vercel.app/news?category=world");
      setNational(nationalData.data.data);
      setBusiness(businessData.data.data);
      setSports(sportsData.data.data);
      setWorld(worldData.data.data);
      setLoading(false);
    };
    fetchNews();
  }, []);


  if (loading) {
    return (
      <div className="h-screen w-screen">
        <PageLoader />
      </div>
    );
  }

  return (
  <>

  <NewsCard result={national} category="National" filter={false}/>
  <NewsCard result={sports} category="Sports" filter={false}/>
  <NewsCard result={world} category="World" filter={false}/>
  <NewsCard result={business} category="Business" filter={false}/>
  </>
  );
}

export default NewsList;
