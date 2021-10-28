import React, { useState } from "react";
import "../App.css";
import { Pane, Typography, Button, Checkbox } from "@bigbinary/neetoui/v2";
import { Check } from "@bigbinary/neeto-icons";
import { Link } from "react-router-dom";

const FilterPane = ({ onClose, setShowFilterPane }) => {
  const categories = [
    "All",
    "Science",
    "Business",
    "National",
    "Sports",
    "World",
    "Technology",
  ];

  const [filteredCategories, setFilteredCategories] = useState([]);

  const handleFilter = (e) => {
    let id = e.target.id;
    if (e.target.checked)
    {
      setFilteredCategories([...filteredCategories, e.target.id]);
      e.target.checked=true
    }
    else {
      var filtered = filteredCategories.filter((id) => id !== e.target.id);
      setFilteredCategories(filtered);
    }
  };
  return (
    <div>
      {console.log("rendering filter pane")}
      <Pane isOpen={setShowFilterPane} onClose={onClose}>
        <Pane.Header>
          <Typography style="h2" weight="semibold">
            Filter Articles
          </Typography>
        </Pane.Header>
        <Pane.Body>
          <Typography style="h4">Category</Typography>
          <div>
            {categories.map((category, i) => (
              <div className="pl-4 py-5">
                <Checkbox
                  id={i}
                  // checked={filteredCategories.includes(i)?false:true}
                  label={
                    <Typography style="h5" className="neeto-ui-text-black">
                      {category}
                    </Typography>
                  }
                  onChange={(e) => {
                    handleFilter(e);
                  }}
                />
              </div>
            ))}
          </div>
          <div className="pl-4 py-5 border-t w-full">
            <Checkbox
              id={8}
              label={
                <Typography style="h5" className="neeto-ui-text-black">
                  Include archived articles
                </Typography>
              }
              onChange={(e) => {
                handleFilter(e);
              }}
            />
          </div>
        </Pane.Body>
        <Pane.Footer className="flex items-center space-x-2">
          <Link
            to={{
              pathname: "/filtered",
              state: { filteredCategories: filteredCategories },
            }}
          >
            <Button icon={Check} size="large" label="Save Changes" onClick={() => setShowFilterPane(false) }/>
          </Link>
          <Button
            style="text"
            size="large"
            label="Cancel"
            onClick={() => setShowFilterPane(false)}
          />
        </Pane.Footer>
        {/* {console.log(filteredCategories)} */}
      </Pane>
    </div>
  );
};

export default FilterPane;
