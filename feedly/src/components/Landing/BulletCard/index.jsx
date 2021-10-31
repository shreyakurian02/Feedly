import React from "react";
import Card from "./Card";

const BulletCard = ({ articleSet, category,MainArticleId,filter,bulletLength }) => {


const getCardNumbers = () => {
  let numberOfCards

 console.log(`bl-${bulletLength}`)
  if(bulletLength>8)
  numberOfCards = 8

  else if(bulletLength!=null)
  {
    numberOfCards=bulletLength-1 + 5
  }

  else
  numberOfCards = 4

  return numberOfCards



}

  return (

    <div className="py-5 border-b">
      <div className="grid grid-cols-2 gap-12">

      {Array(getCardNumbers()).fill().map((_,i) => (
          <Card articleSet={articleSet} index={(MainArticleId+i+1)%25} />
        ))}
      </div>
    </div>
  );
};

export default BulletCard;
