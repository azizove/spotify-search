// App.tsx
import React, { useState, useEffect, useCallback } from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import { useSpotifyApi } from '../hooks/useSpotifyApi';
import { useSearchSpotifyTracks } from '../hooks/useSearchSpotifyTracks';
import { Track } from '@spotify/web-api-ts-sdk';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../style/theme';
import { Container, CssBaseline } from '@mui/material';

const App: React.FC = () => {
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
        } catch (error) {
          setError('Error fetching tracks.');
        } finally {
          setLoading(false);
        }
      }
    },
    [searchTracks]
  );

  useEffect(() => {
    // Load initial data on app startup (optional)
    fetchSpotifyTracks('');
  }, [fetchSpotifyTracks]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container style={{ margin: '20px' }}>
        <SearchBar onSearch={fetchSpotifyTracks} />
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {searchResults && <SearchResults searchResults={searchResults} />}
      </Container>
    </ThemeProvider>
  );
};

export default App;
