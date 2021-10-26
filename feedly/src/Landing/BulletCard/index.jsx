import React from "react";
import Card from "./Card";

const BulletCard = ({ result, category }) => {
  return (
    <div className="py-5 border-b">
      <div className="grid grid-cols-2 gap-12">
        <Card result={result} index={1} />
        <Card result={result} index={2} />
        <Card result={result} index={3} />
        <Card result={result} index={4} />
      </div>
    </div>
  );
};

export default BulletCard;
