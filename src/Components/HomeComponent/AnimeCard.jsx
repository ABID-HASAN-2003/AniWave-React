import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const AnimeCard = ({ anime }) => {
  return (
    <div className="relative border border-gray-400 hover:border-gray-500  shadow-2xl rounded-lg overflow-hidden transform hover:scale-102 transition-transform duration-300 w-full h-full">

      {/* Card Content */}
      <div className="relative z-10">
        <img
          src={anime.image}
          alt={anime.title}
          className="w-full h-56 object-cover"
        />

        <div className="px-4 py-1">
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 text-[#0a2472]">{anime.title}</h2>
          <div className="flex gap-2">
          <p className="text-sm text-[#0e6ba8] mb-1">
            <span className="font-semibold text-[#0a2472]">Type:</span> {anime.type || "N/A"} <span>,</span>
          </p>

          <p className="text-sm text-[#0e6ba8] mb-1 hidden md:block">
            <span className="font-semibold text-[#0a2472]">EP :</span> {anime.episodes || "N/A"}
          </p>
          </div>

          <p className="text-sm text-[#0e6ba8] mb-1 hidden md:block">
            <span className="font-semibold text-[#0a2472]">Release Date:</span> {anime.release_date}
          </p>

          <p className="text-sm text-[#0e6ba8] mb-1 hidden md:block">
            <span className="font-semibold text-[#0a2472]">Age Rating:</span> {anime.age_rating}
          </p>

          <p className="text-sm  mb-1 flex items-center gap-2 text-rose-800/80">
            <span className="font-semibold text-red-700">
              <div className="flex">
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>
              </span> {anime.rating}
          </p>

          {anime.tags.length > 0 && (
            <p className="text-sm text-gray-600 mb-1">
              <span className="font-semibold text-[#0a2472]">Genres:</span> {anime.tags.join(", ")}
            </p>
          )}

          {anime.main_characters.length > 0 && (
            <p className="text-sm text-[#0e6ba8] mb-1">
              <span className="font-semibold">Main Characters:</span>{" "}
              {anime.main_characters.join(", ")}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnimeCard;
