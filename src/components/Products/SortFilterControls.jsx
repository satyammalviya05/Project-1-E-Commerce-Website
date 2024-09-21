// components/SortFilterControls.js
import { Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useState } from 'react';

const SortFilterControls = ({ onChange }) => {
  const [sort, setSort] = useState('price');
  const [category, setCategory] = useState('all');

  const handleSortChange = (event) => {
    setSort(event.target.value);
    onChange({ sort: event.target.value, category });
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    onChange({ sort, category: event.target.value });
  };

  return (
    <Box display="flex" gap={2} sx={{ mb: 2 }}>
      <FormControl fullWidth>
        <InputLabel>Sort By</InputLabel>
        <Select value={sort} onChange={handleSortChange}>
          <MenuItem value="price">Price</MenuItem>
          <MenuItem value="rating">Rating</MenuItem>
          <MenuItem value="name">Name</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel>Category</InputLabel>
        <Select value={category} onChange={handleCategoryChange}>
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="electronics">Electronics</MenuItem>
          <MenuItem value="fashion">Fashion</MenuItem>
          <MenuItem value="books">Books</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SortFilterControls;
