"use client"
import { useState } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import ProductList from '@/components/Products/ProductList';
import SortFilterControls from '@/components/Products/SortFilterControls';

const ProductsPage = () => {
  const [filters, setFilters] = useState({
    sort: 'price', // Default sorting by price
    category: 'all', // Default filter category
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <Container>
      <Typography variant="h4" sx={{ my: 4 }}>
        Product Listing
      </Typography>
      <SortFilterControls onChange={handleFilterChange} />
      <Box sx={{ mt: 4 }}>
        <ProductList filters={filters} />
      </Box>
    </Container>
  );
};

export default ProductsPage;
