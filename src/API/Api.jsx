// TopAnimeFetcher.jsx
import React, { useEffect, useState } from "react";

const TopAnimeFetcher = ({ children }) => {
  const [animeData, setAnimeData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Jikan API: Top Anime
    fetch("https://api.jikan.moe/v4/top/anime")
      .then((res) => res.json())
      .then((data) => {
        const mappedData = data.data.map((anime) => ({
          id: anime.mal_id,
          title: anime.title,
          image: anime.images?.jpg?.image_url || "https://via.placeholder.com/150", // safe fallback
          type: anime.type,
          episodes: anime.episodes,
          release_date: anime.aired?.from?.split("T")[0] || "N/A",
          age_rating: anime.rating || "N/A",
          rating: anime.score || "N/A",
          tags: anime.genres?.map((g) => g.name) || [],
          main_characters: anime.characters?.slice(0, 3).map((c) => c.name) || [],
          synopsis: anime.synopsis?.slice(0, 100) || "No synopsis available",
        }));
        setAnimeData(mappedData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching anime data:", err);
        setLoading(false);
      });
  }, []);

  return children({ animeData, loading });
};

export default TopAnimeFetcher;
