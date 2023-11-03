import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const textFieldStyle = {
    width: '100%',
  };

  const buttonStyle = {
    marginTop: 0,
    marginLeft: 10,
    height: '100%',
  };

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={8}>
        <TextField
          variant="outlined"
          label="Search for tracks"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={textFieldStyle}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSearch}
          style={buttonStyle}
        >
          Search
        </Button>
      </Grid>
    </Grid>
  );
};

export default SearchBar;
