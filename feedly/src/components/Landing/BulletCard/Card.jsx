import React from "react";
import { Typography, Button } from "@bigbinary/neetoui/v2";
import { Link } from "react-router-dom";

const Card = ({ articleSet, index }) => {
  return (
    <div className="flex flex-row ">
      <div>
        <img
          src={articleSet[index].imageUrl}
          alt="Article image"
          className="w-24 h-24"
        />
      </div>
      <div className="px-5 flex flex-col space-y-2">
        <Typography style="h6">{articleSet[index].title}</Typography>
        <Typography style="body3">{`${articleSet[index].author} at ${articleSet[index].time} on ${articleSet[index].date}`}</Typography>
        <Link
          to={{
            pathname: `/news/${articleSet[index].title}`,
            state: { articleSet: articleSet, index: index },
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
  );
};

export default Card;
