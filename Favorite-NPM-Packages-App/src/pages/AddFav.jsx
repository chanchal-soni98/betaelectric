import React, { useEffect, useState } from "react";
import Input from "../components/Input";
import TextArea from "../components/TextArea";
import Button from "../components/Button";
import { getFavs, setFavs } from "../utils/localStorage";
import { useNavigate } from "react-router-dom";

const AddFav = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [selected, setSelected] = useState("");
  const [reason, setReason] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (query.length > 2) {
        fetchPackages();
      } else {
        setResults([]);
      }
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [query]);

  const fetchPackages = async () => {
    try {
      setLoading(true);
      const res = await fetch(`https://api.npms.io/v2/search?q=${query}`);
      const data = await res.json();
      setResults(data.results.map(r => r.package.name));
    } catch (err) {
      console.error("Failed to fetch packages:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = () => {
    if (!selected || !reason.trim()) return alert("Select package and enter reason");
    const favs = getFavs();
    if (favs.find(f => f.name === selected)) return alert("Already added");
    favs.push({ name: selected, reason });
    setFavs(favs);
    navigate("/list");
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 border rounded">
      <Input
        label="Search NPM Packages"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="e.g. react"
      />

      {loading && <p className="text-sm text-gray-500">Loading packages...</p>}

      {results.length > 0 && (
        <div className="mt-4 max-h-40 overflow-y-auto border p-2 rounded bg-gray-50">
          {results.map(pkg => (
            <div key={pkg} className="flex items-center mb-1">
              <input
                type="radio"
                name="pkg"
                value={pkg}
                checked={selected === pkg}
                onChange={(e) => setSelected(e.target.value)}
              />
              <label className="ml-2 text-sm">{pkg}</label>
            </div>
          ))}
        </div>
      )}

      <TextArea
        label="Why is this your fav?"
        value={reason}
        onChange={(e) => setReason(e.target.value)}
        placeholder="Enter reason"
      />

      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  );
};

export default AddFav;
