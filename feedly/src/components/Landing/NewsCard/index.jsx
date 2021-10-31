import React from "react";
import { Typography, Button } from "@bigbinary/neetoui/v2";
import BulletCard from "../BulletCard";
import { Link } from "react-router-dom";

const NewsCard = ({ articleSet, category, filter, bulletLength }) => {
  return (
    articleSet.length > 0 && (
      <>
        <div className="border-b pt-3 pb-12">
          <div className="py-10">
            <Typography style="h2">{category} News</Typography>
          </div>
          <div className="flex flex-row">
            <div className="w-1/2">
              <img
                src={articleSet[0].imageUrl}
                alt="Article image"
                className="w-full h-72"
              />
            </div>
            <div className="px-5 flex flex-col w-1/2 space-y-5">
              <Typography style="h3">{articleSet[0].title}</Typography>
              <Typography
                style="body3"
                className="ml-auto"
              >{`${articleSet[0].author} at ${articleSet[0].time} on ${articleSet[0].date}`}</Typography>
              <Typography style="body2" className="">
                {articleSet[0].content.slice(0, 300)}...
              </Typography>
              <Link
                to={{
                  pathname: `/news/${articleSet[0].title.split(" ").join("-")}`,
                  state: { articleSet: articleSet, index: 0 },
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
        <BulletCard
          articleSet={articleSet}
          category={category}
          MainArticleId={0}
          filter={filter}
          bulletLength={bulletLength}
        />
      </>
    )
  );
};

export default NewsCard;
