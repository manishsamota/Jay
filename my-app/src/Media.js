import React, { useState } from 'react';
import axios from 'axios';
// import Header from './Header';
// import Footer from './Footer';
import Card from './card'

const Media = () => {
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
          q: query,
          page_size: 20,
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
      {/* <Header /> */}

      <div className="media-search">
        <h2>Search Openverse Media</h2>
<div className="input-group mb-3"> {/* Use input-group for proper alignment */}

        <form className="form-inline d-flex  mx-auto my-5" onSubmit={handleSearch} style={{ width: '50%' }}>

          <input

            className="form-control mr-5" // Use margin for spacing

            type="text"

            value={query}

            onChange={(e) => setQuery(e.target.value)}

            placeholder="Enter search term (e.g., cats)"

            aria-label="Search" // Accessibility improvement

          />

          <button className="btn btn-outline-success ml-5 pl-5" type="submit" disabled={loading}>

            {loading ? 'Searching...' : 'Search'}

          </button>

        </form>

        </div>

        {error && <p className="error">{error}</p>}

        <div className=" card-main row">
          {results.length > 0 ? (
            results.map((item) => (
              <div className="col-12 col-md-6 col-lg-6 col-xl-4 " key={item.id}> 
                <Card 
                  title={item.title} 
                  cardimage={item.thumbnail} 
                  url={item.url} 
                  creator={item.creator} 
                />
              </div>
            ))
          ) : (
            !loading && <p>No results found. Try a different search term.</p>
          )}
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default Media;