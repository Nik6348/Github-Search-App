import React from 'react';

function GithubDisplay({ userData }) {
  return (
    <div className="github-display-container">
      {userData ? (
        <div className="github-user-info">
          <h2>{userData.name || userData.login}</h2>
          <img src={userData.avatar_url} width={200} alt={`${userData.login}'s avatar`} />
          <p>Followers: {userData.followers}</p>
          <p>Following: {userData.following}</p>
          <p>Public Repos: {userData.public_repos}</p>
        </div>
      ) : (
        <p>No user data to display</p>
      )}
    </div>
  );
}

export default GithubDisplay;