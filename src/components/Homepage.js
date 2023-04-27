import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="homepage">
      <h1>Welcome to My Bible App!</h1>
      <div className="homepage-options">
        <Link to="/favorites">View Favorites</Link>
        <Link to="/bible">Go to Bible</Link>
      </div>
    </div>
  );
}

export default HomePage;