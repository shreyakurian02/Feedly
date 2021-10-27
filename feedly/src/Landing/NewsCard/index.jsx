import React from "react";
import { Typography,Button} from "@bigbinary/neetoui/v2";
import BulletCard from "../BulletCard";
import { Link } from "react-router-dom";

const NewsCard = ({ result, category}) => {
  return (
    <>
      <div className="border-b pt-3 pb-12">
        <div className="py-10">
          <Typography style="h2">{category} News</Typography>
        </div>
        <div className="flex flex-row">
          <div className="w-1/2">
            <img
              src={result[0].imageUrl}
              alt=""
              className="w-full h-72"
            />
          </div>
          <div className="px-5 flex flex-col w-1/2 space-y-5">
            <Typography style="h3">{result[0].title}</Typography>
            <Typography
              style="body3"
              className="ml-auto"
            >{`${result[0].author} at ${result[0].time} on ${result[0].date}`}</Typography>
            <Typography style="body2" className="">
              {result[0].content.slice(0, 300)}...
            </Typography>
            <Link
        to = {{
          pathname:`/news/${result[0].title}`,
          state: {result:result, index:0},
        }}
        >
       <Button
          label="Read More"
          style="link"
          className="neeto-ui-text-secondary-indigo"
        />
        </Link>
          </div>
        </div>
      </div>
      <BulletCard result={result} category={category} MainArticleId={0}/>
    </>
  );
};

export default NewsCard;
