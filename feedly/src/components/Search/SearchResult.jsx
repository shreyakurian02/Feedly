import React, { useEffect, useState, useContext } from "react";
import { Typography, Button } from "@bigbinary/neetoui/v2";
import { Link } from "react-router-dom";
import { NewsContext } from "../../contexts/newsFeeder";

const SearchResult = ({ searchResult, searchRelatedData, setShowSearchModal }) => {
  const news = useContext(NewsContext);

  const result = searchResult.map((article, i) => {
    let indexValue = searchRelatedData[i].indexOf(article);

    return (
      <div className="relative z-20bg-white shadow-xl  bg-gray-100 rounded-xl max-w-[700px] w-full transform transition-all py-3">
        <Link
          to={{
            pathname: `/news/${article.title}`,
            state: { articleSet: searchRelatedData[i], index: indexValue },
          }}
        >
          <Button
            style="text"
            className="py-5 bg-gray-100 w-full"
            key={i}
            label={article.title}
            onClick={() => setShowSearchModal(false)}
          >
            <Typography>{article.title}</Typography>
          </Button>
        </Link>
      </div>
    );
  });

  return <div className="space-y-5">{result}</div>;
};

export default SearchResult;
