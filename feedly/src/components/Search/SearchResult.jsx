import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { Modal, Typography, Input,Button } from "@bigbinary/neetoui/v2";
import { Search } from "@bigbinary/neeto-icons";
import { Link } from "react-router-dom";

const SearchResult = ({ searchResult }) => {

  const result = searchResult.map((news) => (
   <div>
     {console.log("rendering from comp result")}
     <Button
    style="text"
    className="py-5"
    key={news.title}
    label={news.name}
    >
      <Typography >{news.title}</Typography>
    </Button>
    </div>
  ));
  return <div className="space-y-5">{result}</div>;
};
export default SearchResult;
