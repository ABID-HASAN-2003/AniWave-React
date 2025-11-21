import React from 'react';

const TagFilter = ({ allTags = [], selectedTags, setSelectedTags }) => {

  // Toggle tag selection
  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <div className="flex flex-wrap gap-2 my-2">
      {allTags.map((tag, index) => (
        <button
          key={index}
          onClick={() => toggleTag(tag)}
          className={`px-3 py-1 rounded-full border transition-colors ${
            selectedTags.includes(tag)
              ? 'bg-rose-700 text-white border-black'
              : 'bg-gray-200 text-blue-900 border-black'
          } `}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default TagFilter;
