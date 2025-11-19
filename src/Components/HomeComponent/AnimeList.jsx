import React, { useEffect, useState } from "react";
import AnimeCard from "./AnimeCard";

const AnimeList = () => {
  const [animeData, setAnimeData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Jikan API: Top Anime
    fetch("https://api.jikan.moe/v4/top/anime")
      .then((res) => res.json())
      .then((data) => {
        // Map API data to match your AnimeCard props
        const mappedData = data.data.map((anime) => ({
          id: anime.mal_id,
          title: anime.title,
          image: anime.images.jpg.image_url,
          type: anime.type,
          episodes: anime.episodes,
          release_date: anime.aired?.from?.split("T")[0] || "N/A",
          age_rating: anime.rating || "N/A",
          rating: anime.score || "N/A",
          tags: anime.genres?.map((g) => g.name) || [],
          main_characters: anime.characters?.slice(0, 3).map((c) => c.name) || [],
          synopsis: anime.synopsis.slice(0,100) || "No synopsis available",
        }));
        setAnimeData(mappedData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching anime data:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center mt-10">Loading anime...</p>;
  }

  return (
    <div className="px-2 py-5 my-10  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 container mx-auto">
      {animeData.map((anime) => (
        <AnimeCard key={anime.id} anime={anime} />
      ))}
    </div>
  );
};

export default AnimeList;
