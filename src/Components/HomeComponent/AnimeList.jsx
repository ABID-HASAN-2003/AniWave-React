import React, { useEffect, useState, useMemo } from "react";
import AnimeCard from "./AnimeCard";
import TopRated from '../HomeComponent/TopRated'
import Loder from "../GlobalComponents/loder";
import Search from "../GlobalComponents/Search"; // Import the Search component
import TagFilter from "../GlobalComponents/TagFilter"; // Import the TagFilter component

const AnimeList = () => {
  const [animeData, setAnimeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const [selectedTags, setSelectedTags] = useState([]); // State for selected tags

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

  // Extract all unique tags from the anime data
  const allTags = useMemo(() => {
    const tags = new Set();
    animeData.forEach(anime => {
      anime.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, [animeData]);

  // Filter the anime list based on search term and selected tags
  const filteredAnime = useMemo(() => {
    let filtered = animeData;

    // 1. Filter by search term
    if (searchTerm) {
      const lowerCaseSearch = searchTerm.toLowerCase();
      filtered = filtered.filter(anime =>
        anime.title.toLowerCase().includes(lowerCaseSearch) ||
        anime.synopsis.toLowerCase().includes(lowerCaseSearch)
      );
    }

    // 2. Filter by selected tags
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
      {/* Search and Filter Section */}
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
      
      {/* Top Rated Section (using the original, unfiltered data) */}
      

      {/* Anime List Section (using the filtered data) */}
      <div className="py-5 my-10">
        <h2 className="text-2xl font-bold mb-4">{filteredAnime.length} Animes Found</h2>
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