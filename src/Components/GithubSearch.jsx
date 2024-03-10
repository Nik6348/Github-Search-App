import React, { useState } from 'react';

function GithubSearch({ onSearch, isLoading, isError }) {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchInput);
  };

  return (
    <div className="github-search-container">
      <form className="github-search-form" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={searchInput}
          onChange={handleSearchInput}
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Searching...' : 'Search'}
        </button>
      </form>
      {isError && <p className="error-message">Error fetching user data. Please try again.</p>}
    </div>
  );
}

export default GithubSearch;
