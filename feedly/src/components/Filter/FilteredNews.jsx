import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router";

import NewsCard from "../Landing/NewsCard";
import WriteMore from "./WriteMore";
import BulletCard from "../Landing/BulletCard";
import { NewsContext } from "../../contexts/newsFeeder";
import { MONTHS } from "./constants";
import { CATEGORIES } from "../../contexts/constants";
import NoNewsArticle from "./NoNewsArticle";
import Tags from "./Tags";

const FilteredNews = () => {

  const [filteredNews, setFilteredNews] = useState([]);
  const [showWriteMoreModal, setShowWriteMoreModal] = useState(false);
  const categoriesData = useContext(NewsContext);
  const [tags, setTags] = useState([]);
  const [isArchivedTag, setIsArchivedTag] = useState(false);

  const { filteredCategories, isArchived } = useLocation().state;

  const getDate = () => {
    let todayDate = new Date();
    var day = todayDate.getDate();
    if(day<10) day = ("0" + day)
    var month = todayDate.getMonth();
    var year = todayDate.getFullYear();
    todayDate = `${day} ${MONTHS[month]} ${year}`;
    return todayDate;
  };

  const getFilteredNews = (isArchivedCond) => {
    var filtered = tags.map((category) => {
      var news = categoriesData.filter((element) => {
        return CATEGORIES[category] === element.category;
      });
      return news;
    });
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
    return filteredNews.every((data) => data.data.length === 0);
  };

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
    window.localStorage.setItem("isArchived", JSON.stringify(false));
    setIsArchivedTag(false);
  };

  return (
    <>
      <Tags
        handleClose={handleClose}
        handleArchivedClose={handleArchivedClose}
        isArchivedTag={isArchivedTag}
        tags={tags}
      />
      {getNewsLength() ? (
        <>
          <NoNewsArticle setShowWriteMoreModal={setShowWriteMoreModal} />
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
          )}
        </>
      ) : (
        <>
          {filteredNews.length > 0 &&
            filteredNews.map((news, i) => (
              <div key={i}>
                <NewsCard
                  bulletLength={news.data.length}
                  articleSet={news.data}
                  category={
                    news.category[0].toUpperCase() + news.category.slice(1)
                  }
                  filter={true}
                />
              </div>
            ))}
        </>
      )}
    </>
  );
};

export default FilteredNews;
