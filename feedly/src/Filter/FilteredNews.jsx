import React, { useState, useEffect } from "react";
import "../App.css";
import { useLocation } from "react-router";
import { Pane, Typography, Button, Checkbox, Tag } from "@bigbinary/neetoui/v2";
import { Highlight } from "@bigbinary/neeto-icons";
import axios from "axios";
import NewsCard from "../Landing/NewsCard";
import NoNews from "./NoNews.png";
import WriteMore from "./WriteMore";

const FilteredNews = () => {
  const [filteredNews, setFilteredNews] = useState([]);
  const [showWriteMoreModal, setShowWriteMoreModal] = useState(false);
  const [date, setDate] = useState(new Date());
  const [id, setId] = useState();
  const categories = [
    "all",
    "science",
    "business",
    "national",
    "sports",
    "world",
    "technology",
  ];
  // const [filteredCategories,setFilteredCategories] = useState(JSON.parse(localStorage.getItem('filteredCategories')))
  const { filteredCategories } = useLocation().state;
    useEffect(()=>{
      const fetchNews = async (category) => {
      const data = await axios.get(`https://inshortsapi.vercel.app/news?category=${categories[category]}`)
      if(!filteredNews.includes(data.data)) setFilteredNews( filteredNews => [...filteredNews, data.data])
    }
    setFilteredNews([])
    filteredCategories.forEach((category)=>fetchNews(category))

  },[filteredCategories])

  const handleClose = (e) => {
    //To implement
  };

  if (filteredNews.length == 0)
    return (
      <>
        <div className="flex justify-center py-16">
          <div className="space-y-5 flex flex-col justify-center">
            <img src={NoNews} alt="No News" className="" />
            <Typography style="h3">No News Articles Found</Typography>
            <Button
              className="mx-auto"
              icon={() => <Highlight size={15} />}
              label="Write to us"
              style="secondary"
              onClick={() => setShowWriteMoreModal(true)}
            />
          </div>
        </div>

        {showWriteMoreModal && (
          <WriteMore setShowWriteMoreModal={setShowWriteMoreModal} />
        )}
      </>
    );

  return (
    <div>
      <div>
        {filteredCategories.map((category, i) => (
          <Tag
            className="mr-5 mt-5"
            label={
              categories[category][0].toUpperCase() +
              categories[category].slice(1)
            }
            onClose={(e) => handleClose(e)}
          />
        ))}
      </div>
      {filteredNews.map((news, i) => (
        <div>
          <NewsCard
            result={news.data}
            category={news.category[0].toUpperCase() + news.category.slice(1)}
          />
        </div>
      ))}
    </div>
  );
};

export default FilteredNews;
