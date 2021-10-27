import React from "react";
import ReactDOM from 'react-dom'
import { Modal, Typography, Input } from "@bigbinary/neetoui/v2";
import { Search } from "@bigbinary/neeto-icons";

 const SearchModal = ({ onClose, setShowSearchModal }) => {
  return ReactDOM.createPortal(
    <Modal isOpen onClose={onClose} loading={false}>
      <Modal.Body>
        <Input size="large" className="w-full" prefix={<Search size={16}/>}  />
      </Modal.Body>
    </Modal>
  ,document.getElementById('portal'));
}
export default SearchModal;
