// App.js
import React, { useState, useEffect } from 'react';
import GithubSearch from './Components/GithubSearch';
import GithubDisplay from './Components/GithubDisplay';

function App() {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSearch = async (username) => {
    setIsLoading(true);
    setIsError(false);

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setUserData(data);
      } else {
        throw new Error('Request failed');
      }
    } catch (error) {
      setIsError(true);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    document.title = userData ? `${userData.name || userData.login}'s GitHub` : 'GitHub Search App';
  }, [userData]);

  return (
    <div className="app-container">
      <div className="github-section">
        <h1>Github Search App</h1>
        <GithubSearch onSearch={handleSearch} isLoading={isLoading} isError={isError} />
        <GithubDisplay userData={userData} />
      </div>
    </div>
  );
}

export default App;
