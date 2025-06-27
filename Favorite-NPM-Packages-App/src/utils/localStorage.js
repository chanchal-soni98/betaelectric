
export const getFavs = () => JSON.parse(localStorage.getItem("favs") || "[]");
export const setFavs = (data) => localStorage.setItem("favs", JSON.stringify(data));
