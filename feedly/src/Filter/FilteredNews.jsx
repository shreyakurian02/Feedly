import React, { useState,useEffect } from "react";
import "../App.css";
import { useLocation } from "react-router";
import { Pane, Typography, Button, Checkbox,Tag } from "@bigbinary/neetoui/v2";
import { Check } from "@bigbinary/neeto-icons";
import axios from "axios";
import NewsCard from "../Landing/NewsCard";

const FilteredNews = () => {
  const [filteredNews, setFilteredNews] = useState([])
  const [id,setId] = useState([])
    const categories = [
    "all",
    "science",
    "business",
    "national",
    "sports",
    "world",
    "technology",
  ];
  const {filteredCategories} = useLocation().state

  useEffect(()=>{
    const fetchNews = async (category) => {
    const data = await axios.get(`https://inshortsapi.vercel.app/news?category=${categories[category]}`)
    setFilteredNews( filteredNews => [...filteredNews, data.data])
  }
  filteredCategories.forEach((category)=>fetchNews(category))},[filteredCategories])

  const handleClose = (e) =>{
    // var filtered = filteredCategories.filter((id) => id !== e.target.id);
    //   setFilteredCategories(filtered);
    console.log(e.target)
  }

  return (
         <div>
           <div>
           {filteredCategories.map((category, i) => (

                <Tag
                className="mr-5 mt-5"
                label={categories[category][0].toUpperCase() + categories[category].slice(1)}
                onClose={e=>handleClose(e)}
/>

            ))}


           </div>
            {filteredNews.map((news, i) => (
              <div>
               <NewsCard result={news.data} category={news.category[0].toUpperCase() + news.category.slice(1)}/>
              </div>
            ))}
          </div>

  );
};

export default FilteredNews;
