import React, { useState, useEffect,useContext } from "react";
import { useLocation } from "react-router";
import { Typography, Button, Tag } from "@bigbinary/neetoui/v2";
import { Highlight } from "@bigbinary/neeto-icons";
import NewsCard from "../Landing/NewsCard";
import NoNews from "./NoNews.png";
import WriteMore from "./WriteMore";
import BulletCard from "../Landing/BulletCard";
import { NewsContext } from "../../contexts/newsFeeder";
import { MONTHS } from "./constants";
import { CATEGORIES } from "../../contexts/constants";

const FilteredNews = () => {
  const [filteredNews, setFilteredNews] = useState([]);
  const [fetchData, setFetchData] = useState([]);
  const [showWriteMoreModal, setShowWriteMoreModal] = useState(false);
  const [dateArticle, setDateArticle] = useState(new Date());
  const categoriesData = useContext(NewsContext);

  const getDate = () => {
    var day = dateArticle.getDate();
    var month = dateArticle.getMonth();
    var year = dateArticle.getFullYear();
    var dateToday = `${day} ${MONTHS[month]} ${year}`;
    return dateToday;
  };

  const { filteredCategories, isArchived } = useLocation().state;

  useEffect(() => {
    categoriesData.forEach((category) => {
      setFetchData((fetchData) => [...fetchData, category]);
    });
  }, []);

  useEffect(() => {
    let array = [];
    filteredCategories.map((category) => {
      var news = fetchData.filter((element) => {
        return CATEGORIES[category] == element.category;
      });
      array.push(...news);
    });
    setFilteredNews([...array]);
  }, [filteredCategories]);

  //---------------------------------------------------TO WORK ON ---------------------------------------------------
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
  //---------------------------------------------------TO WORK ON ---------------------------------------------------

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
            iconPosition="left"
            icon={() => <Highlight size={15} />}
            label={
              <Typography style="h4" className="ml-3">
                Write to us
              </Typography>
            }
            style="secondary"
            onClick={() => setShowWriteMoreModal(true)}
          />
        </div>
      </div>
      {fetchData.length != 0 && (
        <BulletCard
          category="all"
          result={fetchData[0].data}
          MainArticleId={0}
          filter={true}
        />
      )}

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
              CATEGORIES[category][0].toUpperCase() +
              CATEGORIES[category].slice(1)
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
