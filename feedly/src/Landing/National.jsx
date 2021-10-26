import React,{useEffect, useState} from 'react';
import '../App.css';
import axios from 'axios';
import NewsCard from './NewsCard';
import { Typography,PageLoader } from "@bigbinary/neetoui/v2";

const National = () => {
  const [loading, setLoading] = useState(true);
  const [national,setNational] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const nationalData = await axios.get("https://inshortsapi.vercel.app/news?category=national");
      setNational(nationalData.data.data);
      setLoading(false);
    };
    fetchPosts();
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
  <NewsCard result={national}/>
  </>
  );
}

export default National;
