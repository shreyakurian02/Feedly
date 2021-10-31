import React from "react";
import Card from "./Card";

const BulletCard = ({ articleSet, category,MainArticleId,filter,bulletLength }) => {
const NUMBER_OF_CARDS = filter? 8: 4

const getCardNumbers = () => {
  let numberOfCards

 console.log(`bl-${bulletLength}`)
  if(bulletLength>8)
  numberOfCards = 8

  else if(bulletLength!=null)
  {
    numberOfCards=bulletLength-1
    console.log("where")
  }

  else
  {numberOfCards = 4
  console.log("here")}

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
