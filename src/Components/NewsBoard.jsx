import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';

const NewsBoard = ({ category }) => {
  const [state, setState] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        let apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=c79fbb515a114cf49a938b820482819e`;

        if (category) {
          apiUrl += `&category=${category}`;
        }

        if (searchQuery) {
          apiUrl += `&q=${encodeURIComponent(searchQuery)}`;
        }

        const response = await fetch(apiUrl);
        const data = await response.json();
        setState(data.articles);
      } catch (error) {
        setHasError(true);
      }
    };

    fetchData();
  }, [category, searchQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <h1 className="d-flex justify-content-center m-2">LATEST NEWS</h1>
      
      {/* Search input field */}
      <div className="d-flex justify-content-center m-2">
        <input
          type="text"
          className="form-control w-25 me-2"
          placeholder="Type to search..."
          value={searchQuery}
          onChange={e => handleSearch(e.target.value)}
        />
      </div>

      {/* Display news articles */}
      {state.map((news, index) => (
        <NewsItem 
          key={index} 
          title={news.title} 
          description={news.description} 
          src={news.urlToImage} 
          url={news.url} 
        />
      ))}
    </div>
  );
};

export default NewsBoard;
