import React from "react";
import "../App.css";
import { Header } from "@bigbinary/neetoui/v2/layouts";
import { Button, Tooltip } from "@bigbinary/neetoui/v2";
import { Search, Notification, Filter } from "@bigbinary/neeto-icons";
import { Typography } from "@bigbinary/neetoui/v2";
import NewsList from "./NewsList";

const Landing = () => {
  return (
    <div>
      <div className="px-6 border-b">
        <Header
          title={
            <Typography className="neeto-ui-text-gray-500">Feed.ly</Typography>
          }
          actionBlock={
            <div className="flex space-x-1 items-center">
              <Tooltip content="" followCursor="horizontal" placement="bottom">
                <Search />
              </Tooltip>
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

      <div className="px-40">
        <div className="w-full">
          <NewsList className=" border-b-2" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
