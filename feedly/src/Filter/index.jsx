import React, {useState} from "react";
import "../App.css";
import { Pane,Typography,Button ,Checkbox} from "@bigbinary/neetoui/v2";
import {Check} from "@bigbinary/neeto-icons"

const FilterPane = ({onClose,setShowFilterPane}) => {

  const categories = ["All","Science","Business","National","Sports","World","Technology"]
  return (
<div>
<Pane isOpen={setShowFilterPane} onClose={onClose}>
        <Pane.Header>
          <Typography style="h2" weight="semibold">
            Filter Articles
          </Typography>
        </Pane.Header>
        <Pane.Body>
          <Typography style="h4">
            Category
          </Typography>
          <div>
{categories.map((category,i) =>
           <div className="pl-4 py-5">
           <Checkbox
            id={i}
            label={<Typography style="h5" className="neeto-ui-text-black">{category}</Typography>}
            />
            </div>
)}
          </div>
          <div className="pl-4 py-5 border-t w-full">
        <Checkbox
            id={8}
            label={<Typography style="h5" className="neeto-ui-text-black">Include archived articles</Typography>}
            />
            </div>
        </Pane.Body>
        <Pane.Footer className="flex items-center space-x-2">
          <Button
            icon={Check}
            size="large"
            label="Save Changes"
            onClick={() => setShowFilterPane(false)}
          />
          <Button
            style="text"
            size="large"
            label="Cancel"
            onClick={() => setShowFilterPane(false)}
          />
        </Pane.Footer>
      </Pane>
</div>
  );
};

export default FilterPane;
