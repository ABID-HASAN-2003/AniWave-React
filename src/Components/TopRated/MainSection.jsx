import React, { useState } from 'react';
import TopAnimeFetcher from '../../API/Api' 
import Loder from '../GlobalComponents/loder';
import AnimeCard from '../HomeComponent/AnimeCard';
import Search from '../GlobalComponents/Search';
import TagFilter from '../GlobalComponents/TagFilter';
import { MdOutlineStarRate } from 'react-icons/md';

const MainSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);

  // Example tags, can be dynamic later
  const allTags = ['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy'];

  return (
    <div>
      <div>
        <div className="container mx-auto flex flex-col justify-between lg:flex-row gap-5 my-10 items-center">
          <div className='flex gap-2 font-bold items-center  text-xl md:text-2xl lg:text-3xl'>
          <h1 className=" whitespace-nowrap">TOP RATED ANIME</h1>
          <div className="flex text-yellow-500">
          <MdOutlineStarRate />
          <MdOutlineStarRate />
          <MdOutlineStarRate />
        </div>
          </div>

          {/* Tag Filter */}
          <TagFilter
            allTags={allTags}
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
          />

          {/* Search Bar */}
          <Search value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        </div>

        
      </div>

      <TopAnimeFetcher>
        {({ animeData, loading }) => {
          // Filter anime based on search query
          let filteredAnime = animeData.filter(anime =>
            anime.title.toLowerCase().includes(searchQuery.toLowerCase())
          );

          // Filter by selected tags
          if (selectedTags.length > 0) {
            filteredAnime = filteredAnime.filter(anime =>
              anime.tags.some(tag => selectedTags.includes(tag))
            );
          }

          return (
            <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 my-10'>
              {loading ? <Loder /> : filteredAnime.map((anime) => (
                <AnimeCard key={anime.id} anime={anime} />
              ))}
            </div>
          );
        }}
      </TopAnimeFetcher>
    </div>
  );
}

export default MainSection;
