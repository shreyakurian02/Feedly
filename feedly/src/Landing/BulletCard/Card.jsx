import React from "react";
import { Typography, Button } from "@bigbinary/neetoui/v2";
import Article from "../Article";
import { Link } from "react-router-dom";

const Card = ({ result, index }) => {
  return (
    <div className="flex flex-row ">
      <div>
        <img src={result[index].imageUrl} alt="" className="w-24 h-24" />
      </div>
      <div className="px-5 flex flex-col space-y-2">
        <Typography style="h6">{result[index].title}</Typography>
        <Typography style="body3">{`${result[index].author} at ${result[index].time} on ${result[index].date}`}</Typography>
        <Link
        to = {{
          pathname:`/news/${result[index].title}`,
          state: {result:result, index:index},
        }}
        >
       <Button
          label="Read More"
          style="link"
          onClick={(e)=>{<Article value={e}/>}}
          // to="/news"
          className="neeto-ui-text-secondary-indigo"
        />
        </Link>
      </div>
    </div>
  );
};

export default Card;
