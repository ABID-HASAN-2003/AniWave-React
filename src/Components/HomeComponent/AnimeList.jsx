import React, { useEffect, useState, useMemo } from "react";
import AnimeCard from "./AnimeCard";
import TopRated from '../HomeComponent/TopRated'
import Loder from "../GlobalComponents/loder";
import Search from "../GlobalComponents/Search";
import TagFilter from "../GlobalComponents/TagFilter";

const AnimeList = () => {
  const [animeData, setAnimeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);

  useEffect(() => {
    // 🚀 Fetch from public/anime.json (NO mapping, NO modification)
    fetch("/anime.json")
      .then((res) => res.json())
      .then((data) => {
        setAnimeData(data);   // direct set
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading anime.json:", err);
        setLoading(false);
      });
  }, []);

  // Extract all unique tags
  const allTags = useMemo(() => {
    const tags = new Set();
    animeData.forEach(anime => {
      anime.tags?.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, [animeData]);

  // Filter anime list
  const filteredAnime = useMemo(() => {
    let filtered = animeData;

    if (searchTerm) {
      const lowerCaseSearch = searchTerm.toLowerCase();
      filtered = filtered.filter(anime =>
        anime.title.toLowerCase().includes(lowerCaseSearch) ||
        anime.synopsis.toLowerCase().includes(lowerCaseSearch)
      );
    }

    if (selectedTags.length > 0) {
      filtered = filtered.filter(anime =>
        selectedTags.every(tag => anime.tags.includes(tag))
      );
    }

    return filtered;
  }, [animeData, searchTerm, selectedTags]);

  if (loading) {
    return <Loder />;
  }

  return (
    <div className="container mx-auto px-4">
      <TopRated anime={animeData} />

      <div className="my-5 md:my-10">
        <h2 className="text-2xl font-bold mb-3">Filter & Search</h2>

        <div className="flex justify-between flex-col md:flex-row gap-4 ">
          <TagFilter
            allTags={allTags}
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
          />

          <Search 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)} 
          />
        </div>
      </div>

      <div className="py-5 my-10">
        <h2 className="text-2xl font-bold mb-4">
          {filteredAnime.length} Animes Found
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredAnime.map((anime) => (
            <AnimeCard key={anime.id} anime={anime} />
          ))}
        </div>

        {filteredAnime.length === 0 && (
          <p className="text-center text-xl text-gray-500">
            No anime matched your criteria. Try adjusting your search or filters.
          </p>
        )}
      </div>
    </div>
  );
};

export default AnimeList;
