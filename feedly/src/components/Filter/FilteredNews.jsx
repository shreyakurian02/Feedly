import React, { useState, useEffect, useContext } from "react";
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
  // const [fetchData, setFetchData] = useState([]);
  const [showWriteMoreModal, setShowWriteMoreModal] = useState(false);
  const [dateArticle, setDateArticle] = useState(new Date());
  const categoriesData = useContext(NewsContext);
  const [tags, setTags] = useState([]);
  const [isArchivedTag, setIsArchivedTag] = useState(false);

  const getDate = () => {
    var day = dateArticle.getDate();
    var month = dateArticle.getMonth();
    var year = dateArticle.getFullYear();
    var dateToday = `${day} ${MONTHS[month]} ${year}`;
    return dateToday;
  };

  const { filteredCategories, isArchived } = useLocation().state;

  const getFilteredNews = (isArchivedCond) => {
    var filtered = tags.map((category) => {
      var news = categoriesData.filter((element) => {
        return CATEGORIES[category] === element.category;
      });
      return news;
    });

    console.log(categoriesData[4].data.length);
    filtered = filtered.flat();

    if (isArchivedCond) {
      setFilteredNews(filtered);
    } else if (!isArchivedCond) {
      let isArchivedNews = [];
      var filter = filtered.map((news1) => {
        var newsAll = news1.data.filter((news2) => {
          return news2.date.split(",")[0] === getDate();
        });
        isArchivedNews.push({ category: news1.category, data: newsAll });
        return news1;
      });

      setFilteredNews(isArchivedNews);
    }
  };


  const getNewsLength = () => {
    return filteredNews.every(data=>data.data.length===0)
  }

  useEffect(() => {
    setTags(filteredCategories);
    setIsArchivedTag(isArchived);
  }, [filteredCategories]);

  useEffect(() => {
    getFilteredNews(isArchivedTag);
  }, [isArchived, tags, isArchivedTag]);

  const handleClose = (i) => {
    var filtered = tags.filter((_, index) => index !== i);
    setTags(filtered);
    window.localStorage.setItem("filteredCategories", JSON.stringify(filtered));
  };

  const handleArchivedClose = () => {
    console.log("reached here");
    window.localStorage.setItem("isArchived", JSON.stringify(false));

    setIsArchivedTag(false);
  };

  console.log("return");

  return(
    <>
    <div>
        {console.log(filteredNews)}
        {tags.map((category, i) => (
          <Tag
            key={i}
            className="mr-5 mt-5"
            label={
              CATEGORIES[category][0].toUpperCase() +
              CATEGORIES[category].slice(1)
            }
            onClose={() => handleClose(i)}
          />
        ))}
        {isArchivedTag ? (
          <Tag
            className="mr-5 mt-5"
            label="Archived"
            onClose={() => handleArchivedClose()}
          />
        ) : null}
      </div>

      {getNewsLength() ?
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

      <BulletCard
        category="all"
        articleSet={categoriesData[0].data}
        MainArticleId={0}
        filter={true}
        bulletLength={null}
      />


    {showWriteMoreModal && (
      <>
        <WriteMore setShowWriteMoreModal={setShowWriteMoreModal} />
      </>
    )}</> :

  <>
  {filteredNews.length > 0 &&
        filteredNews.map((news, i) => (
          <div key={i}>
            <NewsCard
              bulletLength={news.data.length}
              articleSet={news.data}
              category={news.category[0].toUpperCase() + news.category.slice(1)}
              filter={true}
            />
          </div>
        ))}
  </>
    }
      </>
  )
};

export default FilteredNews;
