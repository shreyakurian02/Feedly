import React, { useEffect, useState } from "react";
import { Pane, Typography, Button, Checkbox } from "@bigbinary/neetoui/v2";
import { Check } from "@bigbinary/neeto-icons";
import { Link } from "react-router-dom";
import { CATEGORIES } from "../../contexts/constants";

const FilterPane = ({ onClose, setShowFilterPane }) => {
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [isArchived, setIsArchived] = useState(false);

  useEffect(() => {
    setFilteredCategories(
      JSON.parse(window.localStorage.getItem("filteredCategories"))
    );
    setIsArchived(JSON.parse(window.localStorage.getItem("isArchived")));
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      "filteredCategories",
      JSON.stringify(filteredCategories)
    );
  }, [filteredCategories]);

  useEffect(() => {
    window.localStorage.setItem("isArchived", isArchived);
  }, [isArchived]);

  const handleFilter = (e) => {
    let id = e.target.id;
    if (e.target.checked) {
      if (!filteredCategories.includes(String(id)))
        setFilteredCategories([...filteredCategories, e.target.id]);
    } else {
      var filtered = filteredCategories.filter((id) => id !== e.target.id);
      setFilteredCategories(filtered);
    }
  };

  const handleArchived = (e) => {
    let id = e.target.id;
    if (e.target.checked) {
      setIsArchived(true);
    } else {
      setIsArchived(false);
    }
  };

  return (
    <div>
      <Pane isOpen={setShowFilterPane} onClose={onClose}>
        <Pane.Header>
          <Typography style="h2" weight="semibold">
            Filter Articles
          </Typography>
        </Pane.Header>
        <Pane.Body>
          <Typography style="h4">Category</Typography>
          <div>
            {CATEGORIES.map((category, i) => (
              <div className="pl-4 py-5" key={i}>
                <Checkbox
                  id={i}
                  checked={
                    filteredCategories.includes(String(i)) ? true : false
                  }
                  label={
                    <Typography style="h5" className="neeto-ui-text-black">
                      {category[0].toUpperCase()+category.slice(1)}
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
              checked={isArchived}
              label={
                <Typography style="h5" className="neeto-ui-text-black">
                  Include archived articles
                </Typography>
              }
              onChange={(e) => handleArchived(e)}
            />
          </div>
        </Pane.Body>
        <Pane.Footer className="flex items-center space-x-2">
          <Link
            to={{
              pathname: "/filtered",
              state: {
                filteredCategories: filteredCategories,
                isArchived: isArchived,
              },
            }}
          >
            <Button
              icon={Check}
              size="large"
              label="Save Changes"
              onClick={() => setShowFilterPane(false)}
            />
          </Link>
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
