// TopAnimeFetcher.jsx
import React, { useEffect, useState } from "react";

const TopAnimeFetcher = ({ children }) => {
  const [animeData, setAnimeData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch directly from public/anime.json
    fetch("/anime.json")
      .then((res) => res.json())
      .then((data) => {
        setAnimeData(data);  // no mapping, direct set
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading anime.json:", err);
        setLoading(false);
      });
  }, []);

  return children({ animeData, loading });
};

export default TopAnimeFetcher;
