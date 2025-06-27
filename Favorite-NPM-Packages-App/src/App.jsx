import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AddFav from "./pages/AddFav";
import NoFavs from "./pages/NoFavs";
import FavList from "./pages/FavList";

function App() {
  const favs = JSON.parse(localStorage.getItem("favs") || "[]");
  const redirectTo = favs.length > 0 ? "/list" : "/no-favs";

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={redirectTo} />} />
        <Route path="/add" element={<AddFav />} />
        <Route path="/no-favs" element={<NoFavs />} />
        <Route path="/list" element={<FavList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
