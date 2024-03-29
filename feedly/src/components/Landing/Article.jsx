import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Typography, Button,PageLoader } from "@bigbinary/neetoui/v2";
import { Copy } from "@bigbinary/neeto-icons";

import { NewsContext } from "../../contexts/newsFeeder";
import BulletCard from "./BulletCard";

const Article = () => {
  const { articleSet, index } = useLocation().state;
  const [newArticleSet, setNewArticleSet] = useState([]);
  const categoriesData = useContext(NewsContext);
  const [id, setId] = useState(0);

  useEffect(() => {
    let indexValue;
    let newSet = [];
    if (articleSet.length < 4) {
      newSet = categoriesData.map((data, i) => {
        if (data.data.includes(articleSet[0])) {
          indexValue = i;
          return data.data;
        }
      });
      setId(newSet[indexValue].indexOf(articleSet[index]));
      setNewArticleSet(newSet[indexValue]);
    } else {
      setNewArticleSet(articleSet);
      setId(index);
    }
  });

  if (newArticleSet.length === 0)
    return (
      <div>
        <PageLoader />
      </div>
    );
  return (
    <div className="py-8 space-y-4 ">
      <div className="border-b py-8 space-y-6">
        <Typography style="h1">
          {newArticleSet[id].title}
          <Button
            style="text"
            className="ml-2 neeto-ui-text-gray-500"
            icon={() => <Copy size={20} />}
            onClick={() => {
              navigator.clipboard.writeText(newArticleSet[id].readMoreUrl);
            }}
          />
        </Typography>
        <Typography
          style="body3"
          className="neeto-ui-text-gray-500"
        >{`${newArticleSet[id].author} at ${newArticleSet[id].time} on ${newArticleSet[id].date}`}</Typography>
        <div className="flex justify-center">
          <img src={newArticleSet[id].imageUrl} className="w-2/4 h-80" />
        </div>
        <Typography>
          {Array(5)
            .fill()
            .map((_, i) => newArticleSet[id].content)}
        </Typography>
      </div>
      <BulletCard
        category={newArticleSet[id].category}
        articleSet={newArticleSet}
        MainArticleId={id}
        filte={false}
        bulletLength={null}
      />
    </div>
  );
};

export default Article;
