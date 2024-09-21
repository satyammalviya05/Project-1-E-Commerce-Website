// components/ReviewSection.js
import { Box, Typography, TextField, Button, List, ListItem, ListItemText } from '@mui/material';
import { useState } from 'react';

// Mock Reviews (Replace with actual API data)
const initialReviews = [
  { id: 1, user: 'John Doe', comment: 'Great product!' },
  { id: 2, user: 'Jane Smith', comment: 'Very useful and high quality.' },
];

const ReviewSection = ({ productId }) => {
  const [reviews, setReviews] = useState(initialReviews);
  const [newReview, setNewReview] = useState('');

  const handleReviewSubmit = () => {
    const updatedReviews = [...reviews, { id: Date.now(), user: 'Anonymous', comment: newReview }];
    setReviews(updatedReviews);
    setNewReview('');
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6">Reviews</Typography>
      <List>
        {reviews.map((review) => (
          <ListItem key={review.id}>
            <ListItemText primary={review.user} secondary={review.comment} />
          </ListItem>
        ))}
      </List>
      <Box display="flex" gap={2} mt={2}>
        <TextField
          label="Leave a review"
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
          fullWidth
        />
        <Button variant="contained" onClick={handleReviewSubmit}>
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default ReviewSection;
