import React, { useState } from "react";
import './styles.css'
import Button from "../Button";

const UploadModal = ({ isOpen, onClose }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      alert(`Uploading file: ${file.name}`);
      onClose();
    } else {
      alert("Please select a file to upload.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay flex justify-center align-center w-100" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header flex justify-between align-center w-100">
          <span className="modal-title">Upload File</span>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>
        <div className="modal-body">
          <input type="file" className="file-input w-100" onChange={handleFileChange} />
        </div>
        <div className="modal-footer flex justify-between">
          <button className="cancel-btn" onClick={onClose}>Cancel</button>
          <Button buttonText={'Upload'} onClick={handleUpload}/>
        </div>
      </div>
    </div>
  );
};

export default UploadModal;