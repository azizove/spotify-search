// App.tsx
import React, { useState, useEffect, useCallback } from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import { useSpotifyApi } from '../hooks/useSpotifyApi';
import { useSearchSpotifyTracks } from '../hooks/useSearchSpotifyTracks';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../style/theme'; // Import the custom theme
import { Grid, Paper, Typography } from '@mui/material';
import { Track } from '@spotify/web-api-ts-sdk';

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12; 

  const spotifyApi = useSpotifyApi(process.env.REACT_APP_SPOTIFY_CLIENT_ID??"", process.env.REACT_APP_SPOTIFY_CLIENT_SECRET??"");
  const searchTracks = useSearchSpotifyTracks(spotifyApi);

  const [searchResults, setSearchResults] = useState<Track[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchSpotifyTracks = useCallback(
    async (query: string) => {
      if (searchTracks && query) {
        setLoading(true);
        setError(null);

        try {
          const tracks = await searchTracks(query);
          setSearchResults(tracks??[]);
          setCurrentPage(1); 
        } catch (error) {
          setError('Error fetching tracks.');
        } finally {
          setLoading(false);
        }
      }
    },
    [searchTracks]
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    fetchSpotifyTracks('');
  }, [fetchSpotifyTracks]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container style={{ margin: '20px' }}>
        <SearchBar onSearch={fetchSpotifyTracks} />
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {searchResults && searchResults.length > 0 && (
          <SearchResults
            searchResults={searchResults}
            currentPage={currentPage}
            pageSize={pageSize}
            onPageChange={handlePageChange}
          />
        )}
      </Container>
    </ThemeProvider>
  );
};

export default App;
