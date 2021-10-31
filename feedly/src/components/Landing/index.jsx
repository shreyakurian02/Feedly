import React, { useContext, useEffect, useState } from "react";
import { Header } from "@bigbinary/neetoui/v2/layouts";
import { Button } from "@bigbinary/neetoui/v2";
import { Search, Notification, Filter } from "@bigbinary/neeto-icons";
import { Typography } from "@bigbinary/neetoui/v2";
import SearchModal from "../Search";
import FilterPane from "../Filter";
import Subscribe from "./Subscribe";
import { NewsContext } from "../../contexts/newsFeeder";

const Landing = () => {
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [showFilterPane, setShowFilterPane] = useState(false);
  const [showSubscribeModal, setShowSubsribeModal] = useState(false);
  const as= useContext(NewsContext)

  useEffect(() => {
    localStorage.setItem("filteredCategories", JSON.stringify(['1','3','4','5']));
    localStorage.setItem("isArchived", false);
  }, []);

  return (
    <div>
      <div className="px-6 border-b">
        <Header
          title={
            <Typography className="neeto-ui-text-gray-500">Feed.ly</Typography>
          }
          actionBlock={
            <div className="flex space-x-1 items-center">
              <Button
                style="text"
                onClick={() => setShowSearchModal(true)}
                icon={() => <Search />}
                tooltipProps={{
                  content: "Search",
                  placement: "bottom",
                }}
              />
              <Button
                style="text"
                onClick={() => setShowSubsribeModal(true)}
                icon={() => <Notification />}
                tooltipProps={{
                  content: "Notification",
                  placement: "bottom",
                }}
              />
              <Button
                size="large"
                style="secondary"
                label="Filter"
                onClick={() => setShowFilterPane(true)}
                icon={() => <Filter className="ml-2" size={15} />}
                tooltipProps={{
                  content: "Filter",
                  placement: "bottom",
                }}
              />
            </div>
          }
        />
      </div>

      {showSearchModal && (
        <SearchModal
          setShowSearchModal={setShowSearchModal}
          onClose={() => {
            setShowSearchModal(false);
          }}
        />
      )}

      {showSubscribeModal && (
        <Subscribe
          setShowSubsribeModal={setShowSubsribeModal}
          onClose={() => {
            setShowSubsribeModal(false);
          }}
        />
      )}

      {showFilterPane && (
        <FilterPane
        as={as}
          setShowFilterPane={setShowFilterPane}
          onClose={() => {
            setShowFilterPane(false);
          }}
        />
      )}
    </div>
  );
};

export default Landing;
