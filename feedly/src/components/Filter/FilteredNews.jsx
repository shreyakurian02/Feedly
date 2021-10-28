import React, { useState, useEffect } from "react";
// import "../App.css";
import { useLocation } from "react-router";
import { Pane, Typography, Button, Checkbox, Tag } from "@bigbinary/neetoui/v2";
import { Highlight } from "@bigbinary/neeto-icons";
import axios from "axios";
import NewsCard from "../Landing/NewsCard";
import NoNews from "./NoNews.png";
import WriteMore from "./WriteMore";
import BulletCard from "../Landing/BulletCard";

const FilteredNews = () => {
  const [filteredNews, setFilteredNews] = useState([]);
  const [fetchData, setFetchData] = useState([]);
  const [showWriteMoreModal, setShowWriteMoreModal] = useState(false);
  const [dateArticle, setDateArticle] = useState(new Date());
  const MONTHS = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const getDate = () => {
    var day = dateArticle.getDate();
    var month = dateArticle.getMonth();
    var year = dateArticle.getFullYear();
    var dateToday = `${day} ${MONTHS[month]} ${year}`;
    return dateToday;
  };

  const categories = [
    "all",
    "science",
    "business",
    "national",
    "sports",
    "world",
    "technology",
  ];
  const { filteredCategories, isArchived } = useLocation().state;

  useEffect(() => {
    const fetchNews = async (category) => {
      const data = await axios.get(
        `https://inshortsapi.vercel.app/news?category=${category}`
      );
      setFetchData((fetchData) => [...fetchData, data.data]);
    };
    setFilteredNews([]);
    categories.forEach((category) => fetchNews(category));
  }, []);

  useEffect(() => {
    let array = [];
    filteredCategories.map((category) => {
      var news = fetchData.filter((element) => {
        return categories[category] == element.category;
      });
      array.push(...news);
    });
    setFilteredNews([...array]);
  }, [filteredCategories]);

  //   useEffect(()=>{
  //     const fetchNews = async (category) => {
  //     const data = await axios.get(`https://inshortsapi.vercel.app/news?category=${categories[category]}`)
  //     if(!filteredNews.includes(data.data)) setFilteredNews( filteredNews => [...filteredNews, data.data])
  //   }
  //   setFilteredNews([])
  //   filteredCategories.forEach((category)=>fetchNews(category))

  //   if (!isArchived && filteredNews.length>0){

  //     var filter = filteredNews.map((news1) =>{
  //           var newsAll = news1.data.filter((news2)=>{return news2.date.split(",")[0]===getDate()})
  //           news1.data = [...newsAll]
  //           console.log(`newsAll- ${newsAll}`)
  //           return news1
  //      })
  //      console.log(JSON.stringify(filter))
  //      console.log(`filterd-${filteredNews}`)
  //     //  setFilteredNews([])
  //      setFilteredNews([...filter])

  //   }

  // },[filteredCategories])

  const handleClose = (e) => {
    //To implement
  };

  return filteredNews.length == 0 ? (
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
      {fetchData.length!=0 && <BulletCard
        category="all"
        result={fetchData[0].data}
        MainArticleId={0}
        filter={true}
      /> }

      {showWriteMoreModal && (
        <>
          <WriteMore setShowWriteMoreModal={setShowWriteMoreModal} />
        </>
      )}
    </>
  ) : (
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
        {isArchived ? (
          <Tag
            className="mr-5 mt-5"
            label="Archived"
            onClose={(e) => handleClose(e)}
          />
        ) : null}
      </div>

      {filteredNews.length > 0 &&
        filteredNews.map((news, i) => (
          <div>
            <NewsCard
              result={news.data}
              category={news.category[0].toUpperCase() + news.category.slice(1)}
              filter={true}
            />
          </div>
        ))}
    </div>
  );
};

export default FilteredNews;
