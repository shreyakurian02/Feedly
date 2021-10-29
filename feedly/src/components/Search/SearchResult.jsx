import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { Modal, Typography, Input,Button } from "@bigbinary/neetoui/v2";
import { Search } from "@bigbinary/neeto-icons";
import { Link } from "react-router-dom";
import { Scrollable } from "@bigbinary/neetoui/layouts";

const SearchResult = ({ searchResult }) => {

  const result = searchResult.map((news,i) => (
   <div className="relative z-20 mx-5 bg-white shadow-xl rounded-xl max-w-[700px] w-full transform transition-all duration-300 ease-in-out scale-100">
     <Button
    style="text"
    className="py-5 bg-gray-100 w-full px-2"
    key={i}
    label={news.title}
    >
      <Typography >{news.title}</Typography>
    </Button>
    </div>
  ));
  return <div className="space-y-5">{result}</div>
};
export default SearchResult;
