import React, { useCallback,useMemo, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Input,Button } from "@bigbinary/neetoui/v2";
import { Search,Down,Close } from "@bigbinary/neeto-icons";


const SearchModal = ({ onClose, setShowSearchModal }) => {

  if(!setShowSearchModal) return null
  return ReactDOM.createPortal(
    <>
    <div className="fixed inset-0 bg-black bg-opacity-70"/>
    <div className="fixed top-1/2 w-1/2 border bg-white left-1/4">
        <Input
        size="large"
        className="w-full"
        prefix={<Search size={16} />}
        suffix={ <Button
              style="icon"
              icon={() => <Close size={18} />}
              onClick={onClose}
            />
        }
      />
    </div>
    </>,
    document.getElementById("portal")
  );
};
export default SearchModal;
