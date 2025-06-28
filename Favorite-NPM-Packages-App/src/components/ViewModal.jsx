import React from "react";
import Button from "./Button";

const ViewModal = ({ packageName, reason, onClose }) => {
  return (
    <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
        <h2 className="text-lg font-semibold mb-4">Why this is your favorite?</h2>
        <p className="mb-6 text-gray-700">Package Name: {packageName}</p>
        <p className="mb-6 text-gray-700">Reason: {reason}</p>
        <div className="flex justify-end">
          <Button onClick={onClose}>Close</Button>
        </div>
      </div>
    </div>
  );
};

export default ViewModal;
