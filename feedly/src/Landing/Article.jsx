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
        </div>
        <BulletCard category={result[index].category} result={result}/>
    </div>
  );
};

export default Article;
