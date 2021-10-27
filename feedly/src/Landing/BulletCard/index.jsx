import React from "react";
import Card from "./Card";

const BulletCard = ({ result, category,MainArticleId }) => {
  return (
    <div className="py-5 border-b">
      <div className="grid grid-cols-2 gap-12">
        <Card result={result} index={(MainArticleId+1)%25} />
        <Card result={result} index={(MainArticleId+2)%25} />
        <Card result={result} index={(MainArticleId+3)%25} />
        <Card result={result} index={(MainArticleId+4)%25} />
      </div>
    </div>
  );
};

export default BulletCard;
