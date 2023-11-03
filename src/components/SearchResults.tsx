import React from 'react';
import { Track } from '@spotify/web-api-ts-sdk';
import TrackCard from './TrackCard';

interface SearchResultsProps {
  searchResults: Track[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ searchResults }) => {
  return (
    <div className="results">
      {searchResults.map((track) => (
        <TrackCard key={track.id} track={track} />
      ))}
    </div>
  );
};

export default SearchResults;
