import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const NoFavs = () => {
  const navigate = useNavigate();
  return (
    <div className="m-16 text-center">
    <h5>Welcome to Favorite NPM Packages</h5>
        <div className="text-center mt-20 border px-32 py-16 rounded shadow max-w-md mx-auto">
        <p className="mb-4 text-sm">You don't have any favs yet. Please add.</p>
        <Button onClick={() => navigate("/add")}>Add Fav</Button>
        </div>
    </div>
    
  );
};
export default NoFavs;