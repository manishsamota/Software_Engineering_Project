import React, { useState } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import Card from './Card';

const MediaSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError('');
    setResults([]);

    try {
      const response = await axios.get('https://api.openverse.org/v1/images/', {
        params: {
          q: query, // Search query
          page_size: 20, // Number of results per page
        },
      });
      setResults(response.data.results);
    } catch (err) {
      setError('Failed to fetch media. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (

    <div>
    <Header />

    <div className="media-search">
      <h2>Search Openverse Media</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter search term (e.g., cats)"
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {error && <p className="error">{error}</p>}

      <div className="results">
        {results.length > 0 ? (
          results.map((item) => (
            <div >

              <Card title= {item.title} cardimage = {item.thumbnail} url ={item.url} creator = {item.creator} />
            </div>
            
           


          
          ))
        ) : (
          !loading && <p>No results found. Try a different search term.</p>
        )}
      </div>
    </div>

    <Footer />

    </div>
  );
};

export default MediaSearch;