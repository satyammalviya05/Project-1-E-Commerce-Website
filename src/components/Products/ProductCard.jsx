// components/ProductCard.js
import { Box, Card, CardContent, Typography, Rating, Button } from '@mui/material';
import { FaStar } from 'react-icons/fa';
import { useState } from 'react';

const ProductCard = ({ product }) => {
  const [rating, setRating] = useState(product.rating);

  const handleAddReview = () => {
    // Logic to add a review (e.g., open modal, etc.)
    alert('Add review functionality here.');
  };

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="h6">{product.name}</Typography>
        <Typography variant="body2">${product.price}</Typography>
        <Box display="flex" alignItems="center" gap={1} my={1}>
          <Rating
            name={`rating-${product.id}`}
            value={rating}
            onChange={(event, newValue) => setRating(newValue)}
            icon={<FaStar fontSize="inherit" />}
            emptyIcon={<FaStar fontSize="inherit" color="disabled" />}
          />
        </Box>
        <Button variant="outlined" onClick={handleAddReview}>
          Add Review
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
