import React from "react";
import { Typography, Button} from "@bigbinary/neetoui/v2";
import { Highlight } from "@bigbinary/neeto-icons";
import noNews from "./noNews.png";

const NoNews = ({setShowWriteMoreModal}) => {
  return (
<div className="flex justify-center py-16">
            <div className="space-y-5 flex flex-col justify-center">
              <img src={noNews} alt="No News" className="" />
              <Typography style="h3">No News Articles Found</Typography>
              <Button
                className="mx-auto"
                iconPosition="left"
                icon={() => <Highlight size={15} />}
                label={
                  <Typography style="h4" className="ml-3">
                    Write to us
                  </Typography>
                }
                style="secondary"
                onClick={() => setShowWriteMoreModal(true)}
              />
            </div>
          </div>
  )
}

export default NoNews;
