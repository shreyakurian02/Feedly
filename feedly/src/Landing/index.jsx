import React, {useState} from "react";
import "../App.css";
import { Header } from "@bigbinary/neetoui/v2/layouts";
import { Button, Tooltip } from "@bigbinary/neetoui/v2";
import { Search, Notification, Filter } from "@bigbinary/neeto-icons";
import { Typography } from "@bigbinary/neetoui/v2";
import NewsList from "./NewsList";
import SearchModal from "../SearchModal";

const Landing = () => {
  const [showSearchModal, setShowSearchModal] = useState(false)
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
              onClick={()=>setShowSearchModal(true)}
              icon={() => <Search />}
              tooltipProps={{
                content: "Search",
                placement: "bottom",
              }}/>
              <Button
                style="text"
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
    </div>
  );
};

export default Landing;
