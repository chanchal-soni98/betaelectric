import React from "react";
const Modal = ({ message, onConfirm, onCancel }) => (
  <div className="fixed inset-0 bg-gray bg-opacity-50 flex justify-center items-center">
    <div className="bg-white p-6 rounded shadow">
      <p className="mb-4">{message}</p>
      <div className="flex justify-end space-x-2">
        <button onClick={onCancel} className="px-4 py-2 bg-red-600 rounded">Cancel</button>
        <button onClick={onConfirm} className="px-4 py-2  text-white rounded" style={{ backgroundColor: "#00b3b3" }}>Yes</button>
      </div>
    </div>
  </div>
);
export default Modal;