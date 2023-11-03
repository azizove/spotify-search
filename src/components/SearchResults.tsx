// SearchResults.tsx
import React from 'react';
import { Grid, Paper, Typography, Button } from '@mui/material';
import TrackCard from './TrackCard';
import { Track } from '@spotify/web-api-ts-sdk';

interface SearchResultsProps {
  searchResults: Track[];
  currentPage: number;
  pageSize: number;
  onPageChange: (page: number) => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({ searchResults, currentPage, pageSize, onPageChange }) => {
  const startIdx = (currentPage - 1) * pageSize;
  const endIdx = startIdx + pageSize;
  const currentResults = searchResults.slice(startIdx, endIdx);

  return (
    <div>
      {currentResults.length > 0 ? (
        <Grid container spacing={2}>
          {currentResults.map((track) => (
            <Grid item key={track.id} xs={12} sm={6} md={4}>
              <TrackCard track={track} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Paper elevation={3} style={{ marginTop: '20px' }}>
          <Typography variant="h6" align="center">
            No results found.
          </Typography>
        </Paper>
      )}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        {currentPage > 1 && (
          <Button variant="contained" color="primary" onClick={() => onPageChange(currentPage - 1)}>
            Previous Page
          </Button>
        )}
        {currentResults.length === pageSize && (
          <Button variant="contained" color="primary" onClick={() => onPageChange(currentPage + 1)}>
            Next Page
          </Button>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
