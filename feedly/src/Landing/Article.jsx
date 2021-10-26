import React from "react";
import { Typography } from "@bigbinary/neetoui/v2";
import { useLocation } from "react-router";
import BulletCard from "./BulletCard";

const Article = () => {
  const {result,index} = useLocation().state
 console.log(result)
  return (
    <div className="py-8 space-y-4 ">
      <div className="border-b py-8 space-y-4">
        <Typography style="h1" className="" >
         {result[index].title}
        </Typography>
        <Typography style="body3" className="neeto-ui-text-gray-500">{`${result[index].author} at ${result[index].time} on ${result[index].date}`}</Typography>
        <div className="flex justify-center">
          <img src={result[index].imageUrl} className="w-2/4 h-80" />
        </div>
        <Typography>{Array(5).fill().map((_,i)=>(result[index].content))}</Typography>
        </div>
        <BulletCard category={result[index].category} result={result}/>
    </div>
  );
};

export default Article;
