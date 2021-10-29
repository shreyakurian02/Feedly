import React, { useEffect } from "react";
import { Typography,Button } from "@bigbinary/neetoui/v2";
import { useLocation } from "react-router";
import BulletCard from "./BulletCard";
import { Copy } from "@bigbinary/neeto-icons";
import { PageLoader } from "@bigbinary/neetoui/v2";

const Article = () => {
  const {result,index,showSearch} = useLocation().state

  useEffect(()=>{

    console.log(result)

  },[])

  if(result.length===0)
  return(
    <div>
      <PageLoader/>
    </div>
  )
  return (
    <div className="py-8 space-y-4 ">
      <div className="border-b py-8 space-y-6">
        <Typography style="h1" >
         {result[index].title}
         <Button
          style="text"
          className = "ml-2 neeto-ui-text-gray-500"
           icon={() => <Copy size={20}/>}
           onClick={() => {navigator.clipboard.writeText(result[index].readMoreUrl);}}
         />
         </Typography>
        <Typography style="body3" className="neeto-ui-text-gray-500">{`${result[index].author} at ${result[index].time} on ${result[index].date}`}</Typography>
        <div className="flex justify-center">
          <img src={result[index].imageUrl} className="w-2/4 h-80" />
        </div>
        <Typography>{Array(5).fill().map((_,i)=>(result[index].content))}</Typography>
        </div>
        <BulletCard category={result[index].category} result={result} MainArticleId={index} filte={false}/>
    </div>
  );
};

export default Article;
