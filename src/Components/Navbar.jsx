// Navbar.js
import React, { useState } from 'react';

const Navbar = ({ setCategory, setSearchQuery }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleCategoryClick = (category) => {
    setCategory(category);
    setSearchQuery('');
  };

  const handleSearch = () => {
    setSearchQuery(searchInput);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><span className="badge"><h1>NEWS</h1></span></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item ">
              <a className="nav-link " href="#" onClick={() => handleCategoryClick("general")}><h5 className="text-white">General</h5></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => handleCategoryClick("entertainment")}><h5 className="text-white">Entertainment</h5></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => handleCategoryClick("health")}><h5 className="text-white">Health</h5></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => handleCategoryClick("sports")}><h5 className="text-white">Sports</h5></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => handleCategoryClick("technology")}><h5 className="text-white">Technology</h5></a>
            </li>
          </ul>
        </div>
      </div>
     
      
    </nav>
  );
};

export default Navbar;
