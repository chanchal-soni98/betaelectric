import React, { useEffect, useState } from "react";
import { getFavs, setFavs } from "../utils/localStorage";
import Button from "../components/Button";
import Modal from "../components/Modal";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const FavList = () => {
  const [favs, setLocalFavs] = useState([]);
  const [modal, setModal] = useState({ open: false, index: null });
  const navigate = useNavigate();

  useEffect(() => {
    setLocalFavs(getFavs());
  }, []);

  const handleDelete = (index) => {
    const updated = [...favs];
    updated.splice(index, 1);
    setFavs(updated);
    setLocalFavs(updated);
    setModal({ open: false, index: null });
  };

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">Welcome to Favorite NPM Packages</h1>
        <Button onClick={() => navigate("/add")} className="bg-blue-500">
          Add Favorite
        </Button>
      </div>

      <table className="w-full border text-left">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-3">Package Name</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {favs.map((fav, idx) => (
            <tr key={idx} className="border-t">
              <td className="p-3 align-middle">{fav.name}</td>
              <td className="p-3 flex items-center gap-3">
                <button
                  className="p-2  hover:bg-gray-100"
                  onClick={() => alert(fav.reason)}
                  title="View Reason"
                >
                  <FaEye className="text-black" />
                </button>
                <button
                  className="p-2 hover:bg-gray-100"
                  onClick={() => alert("Edit functionality not required explicitly.")}
                  title="Edit"
                >
                  <FaEdit className="text-black" />
                </button>
                <button
                  className="p-2  hover:bg-gray-100"
                  onClick={() => setModal({ open: true, index: idx })}
                  title="Delete"
                >
                  <MdDelete className="text-black" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {modal.open && (
        <Modal
          message="Are you sure you want to delete?"
          onCancel={() => setModal({ open: false, index: null })}
          onConfirm={() => handleDelete(modal.index)}
        />
      )}
    </div>
  );
};

export default FavList;
