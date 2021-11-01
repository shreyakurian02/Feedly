import React from "react";
import { Typography, Button } from "@bigbinary/neetoui/v2";
import { Home } from "@bigbinary/neeto-icons";
import { useHistory } from "react-router-dom";

import errorImage from "./errorImage.png";

const ErrorBoundaryPage = () => {

  const history = useHistory()

  return (

    <>
    <div className="flex justify center flex-col mt-40 items-cente">
      <div className="flex justify-center">
        <img src={errorImage}/>
      </div>
      <div className="flex justify-center items-center flex-col mt-5 space-y-5">
      <Typography style="h3" className="items-center">You have landed somewhere unknown</Typography>
      <Button
      style="secondary"
      icon={()=> <Home size={15} className="mr-3"/>}
      iconPosition="left"
      label="Take me home"
      onClick={()=>(window.location.href = "/newsList")}
      />
      </div>
    </div>
    </>
  );
};

export default ErrorBoundaryPage;
