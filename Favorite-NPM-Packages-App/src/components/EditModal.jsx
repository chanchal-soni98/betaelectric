import React, { useEffect, useState } from "react";
import Button from "./Button";
import { API_URL } from "../utils/constant";

const EditModal = ({ item, index, onClose, onUpdate }) => {
  const [query, setQuery] = useState(item.name);
  const [reason, setReason] = useState(item.reason);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      fetch(`${API_URL}${query}`)
        .then((res) => res.json())
        .then((data) => setResults(data.results.map((r) => r.package.name)))
        .catch(() => setResults([]));
    }, 500);

    return () => clearTimeout(timeout);
  }, [query]);

  const handleSave = () => {
    if (!query || !reason.trim()) return alert("Name and reason required");
    onUpdate(index, { name: query, reason });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
        <h2 className="text-lg font-semibold mb-4">Edit Favorite</h2>
        <input
          type="text"
          className="w-full border p-2 rounded mb-2"
          placeholder="Search package"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {results.length > 0 && (
          <div className="max-h-32 overflow-y-auto border p-2 mb-2 rounded">
            {results.map((pkg) => (
              <div
                key={pkg}
                className="cursor-pointer p-1 hover:bg-gray-200"
                onClick={() => setQuery(pkg)}
              >
                {pkg}
              </div>
            ))}
          </div>
        )}
        <textarea
          className="w-full border p-2 rounded mb-4"
          rows={3}
          placeholder="Reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        />
        <div className="flex justify-end gap-2">
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
