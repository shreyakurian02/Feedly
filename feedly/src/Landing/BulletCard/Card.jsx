import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { Typography,PageLoader } from "@bigbinary/neetoui/v2";

const Card = ({result,index}) => {

  return (
    <div className="flex flex-row ">
    <div>
      <img src={result[index].imageUrl} alt="" className="w-24 h-24"/>
    </div>
    <div className="px-5 flex flex-col space-y-2">
    <Typography style="h6">{result[index].title}</Typography>
    <Typography style="body3">{`${result[index].author} at ${result[index].time} on ${result[index].date}`}</Typography>
    <Typography style="body2" className="neeto-ui-text-secondary-indigo">Read More</Typography>
    </div>
  </div>
  );
}

export default Card;
