import React, { useEffect, useState, useContext } from "react";
import { Typography, Button } from "@bigbinary/neetoui/v2";
import { Link } from "react-router-dom";
import { NewsContext } from "../../contexts/newsFeeder";

const SearchResult = ({ searchResult, dummy, setShowSearchModal }) => {
  const news = useContext(NewsContext);

  const result = searchResult.map((article, i) => {
    let indexValue = dummy[i].indexOf(article);

    return (
      <div className="relative z-20 mx-5 bg-white shadow-xl rounded-xl max-w-[700px] w-full transform transition-all duration-300 ease-in-out scale-100">
        <Link
          to={{
            pathname: `/news/${article.title}`,
            state: { result: dummy[i], index: indexValue },
          }}
        >
          <Button
            style="text"
            className="py-5 bg-gray-100 w-full px-2"
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
