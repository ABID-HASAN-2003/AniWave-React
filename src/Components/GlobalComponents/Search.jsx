import React from 'react';

const Search = ({ value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Search anime..."
      className="border p-2 rounded w-full sm:w-64 md:w-80 h-10"
    />
  );
};

export default Search;
