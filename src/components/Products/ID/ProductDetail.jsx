// components/ProductDetail.js
import { Card, CardContent, Typography, Box } from '@mui/material';
import { FaStar } from 'react-icons/fa';
import Rating from '@mui/material/Rating';

const ProductDetail = ({ product }) => {
  return (
    <Card sx={{ mb: 4 }}>
      <CardContent>
        <Typography variant="h5">{product.name}</Typography>
        <Typography variant="body1" sx={{ my: 2 }}>
          Price: ${product.price}
        </Typography>
        <Box display="flex" alignItems="center" gap={1} my={1}>
          <Rating
            name={`rating-${product.id}`}
            value={product.rating}
            readOnly
            icon={<FaStar fontSize="inherit" />}
            emptyIcon={<FaStar fontSize="inherit" color="disabled" />}
          />
          <Typography variant="body2">({product.rating})</Typography>
        </Box>
        <Typography variant="body2">{product.description}</Typography>
      </CardContent>
    </Card>
  );
};

export default ProductDetail;
