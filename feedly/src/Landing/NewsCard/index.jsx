import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { Typography,PageLoader } from "@bigbinary/neetoui/v2";
import BulletCard from '../BulletCard';

const NewsCard = ({result,category}) => {

  return (
    <>
<div className="border-b pt-3 pb-12">
<div className="py-10">
    <Typography style="h2">{category} News</Typography>
    </div>
  <div className="flex flex-row">
    <div className="w-1/2">
      <img src={result[0].imageUrl} alt="National" className="w-full h-72"/>
    </div>
    <div className="px-5 flex flex-col w-1/2 space-y-5">
        <Typography style="h3">{result[0].title}</Typography>
        <Typography style="body3" className="ml-auto">{`${result[0].author} at ${result[0].time} on ${result[0].date}`}</Typography>
        <Typography style="body2" className="">{result[0].content.slice(0,300)}...</Typography>
        <Typography style="body2" className="neeto-ui-text-secondary-indigo">Read More</Typography>
    </div>

  </div>
  </div>
  <BulletCard result={result} category={category}/>
  </>
  );
}

export default NewsCard;
