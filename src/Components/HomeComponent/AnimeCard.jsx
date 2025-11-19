import React from "react";

const AnimeCard = ({ anime }) => {
  return (
    <div className="shadow-xl rounded-lg overflow-hidden transform hover:scale-102 transition-transform duration-300 w-full h-full">
      <img
        src={anime.image}
        alt={anime.title}
        className="w-full h-56 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{anime.title}</h2>
        <p className="text-sm text-gray-600 mb-1">
          <span className="font-semibold">Type:</span> {anime.type || "N/A"}
        </p>
        <p className="text-sm text-gray-600 mb-1">
          <span className="font-semibold">Episodes:</span> {anime.episodes || "N/A"}
        </p>
        <p className="text-sm text-gray-600 mb-1">
          <span className="font-semibold">Release Date:</span> {anime.release_date}
        </p>
        <p className="text-sm text-gray-600 mb-1">
          <span className="font-semibold">Age Rating:</span> {anime.age_rating}
        </p>
        <p className="text-sm text-gray-600 mb-1">
          <span className="font-semibold">Rating:</span> {anime.rating}
        </p>
        {anime.tags.length > 0 && (
          <p className="text-sm text-gray-600 mb-1">
            <span className="font-semibold">Genres:</span> {anime.tags.join(", ")}
          </p>
        )}
        {anime.main_characters.length > 0 && (
          <p className="text-sm text-gray-600 mb-1">
            <span className="font-semibold">Main Characters:</span>{" "}
            {anime.main_characters.join(", ")}
          </p>
        )}
        <p className="text-sm text-gray-700 mt-2">{anime.synopsis}</p>
      </div>
    </div>
  );
};

export default AnimeCard;
