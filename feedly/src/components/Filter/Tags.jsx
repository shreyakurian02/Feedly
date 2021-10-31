import React from "react";
import { Tag } from "@bigbinary/neetoui/v2";
import { CATEGORIES } from "../../contexts/constants";

const Tags = ({handleClose,handleArchivedClose,isArchivedTag,tags}) => {
  return (
    <div>
    {tags.map((category, i) => (
      <Tag
        key={i}
        className="mr-5 mt-5"
        label={
          CATEGORIES[category][0].toUpperCase() +
          CATEGORIES[category].slice(1)
        }
        onClose={() => handleClose(i)}
      />
    ))}
    {isArchivedTag ? (
      <Tag
        className="mr-5 mt-5"
        label="Archived"
        onClose={() => handleArchivedClose()}
      />
    ) : null}
  </div>
  )
}

export default Tags;
