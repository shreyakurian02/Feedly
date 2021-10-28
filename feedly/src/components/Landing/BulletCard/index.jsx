import React from "react";
import Card from "./Card";

const BulletCard = ({ result, category,MainArticleId,filter }) => {
const NUMBER_OF_CARDS = filter? 8: 4
  return (
    <div className="py-5 border-b">
      <div className="grid grid-cols-2 gap-12">

      {Array(NUMBER_OF_CARDS).fill().map((_,i) => (
          <Card result={result} index={(MainArticleId+i+1)%25} />
        ))}
      </div>
    </div>
  );
};

export default BulletCard;
