import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import TrackCard from './TrackCard';
import { Track } from '@spotify/web-api-ts-sdk';

interface SearchResultsProps {
  searchResults: Track[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ searchResults }) => {
  const resultsGridStyle = {
    marginTop: 20,
  };

  const noResultsStyle = {
    marginTop: 20,
  };

  return (
    <div>
      {searchResults.length > 0 ? (
        <Grid container spacing={2} style={resultsGridStyle}>
          {searchResults.map((track) => (
            <Grid item key={track.id} xs={12} sm={6} md={4}>
              <TrackCard track={track} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Paper elevation={3} style={noResultsStyle}>
          <Typography variant="h6" align="center">
            No results found.
          </Typography>
        </Paper>
      )}
    </div>
  );
};

export default SearchResults;
