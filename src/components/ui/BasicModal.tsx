import React from "react";

const BasicModal = ({ isOpen, onClose, children }: any) => {
  if (!isOpen) return null; // Don't render if the modal is closed

  return (
    <div className="overlay">
      <div className="modal flex justify-center items-center">
        {children}
        <button onClick={onClose} className="close-button absolute right-4 sm:right-8 top-4">
          <i className="bi bi-x-circle-fill text-2xl sm:text-4xl"></i>
        </button>
      </div>
    </div>
  );
};

export default BasicModal;
