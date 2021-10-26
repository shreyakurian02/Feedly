import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { Typography,PageLoader } from "@bigbinary/neetoui/v2";

const NewsCard = ({result}) => {

  return (
  <div className="flex flex-row">
    <div className="w-1/2">
      <img src="https://picsum.photos/526/263" alt="National" className="fixed"/>
    </div>
    <div className="px-5 flex flex-col w-1/2 space-y-5">
        <Typography style="h3">{result[0].title}</Typography>
        <Typography style="body3" className="ml-auto">{`${result[0].author} at ${result[0].time} on ${result[0].date}`}</Typography>
        <Typography style="body2" className="">{result[0].content.slice(0,300)}...</Typography>
        <Typography style="body2" className="neeto-ui-text-secondary-indigo">Read More</Typography>
    </div>

  </div>
  );
}

export default NewsCard;
