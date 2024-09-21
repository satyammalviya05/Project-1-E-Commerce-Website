"use client"
import { useRouter } from 'next/navigation';
import { Container, Typography, Box } from '@mui/material';
import ProductDetail from '@/components/Products/ID/ProductDetail';
import ReviewSection from '@/components/Products/ID/ReviewSection';
import VideoEmbed from '@/components/Products/ID/VideoEmbed';

// Mock Data (Replace with actual API calls)
const mockProduct = {
  id: 1,
  name: 'Product 1',
  price: 20,
  rating: 4,
  description: 'This is a detailed description of Product 1.',
  videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Example video URL
};

const ProductDetailPage = () => {
  const router = useRouter();
  
  // Fetch product data based on ID (mocked for this example)
  const product = mockProduct; // Replace with actual fetching logic

  return (
    <Container>
      <Typography variant="h4" sx={{ my: 4 }}>
        {product.name}
      </Typography>
      <ProductDetail product={product} />
      <ReviewSection productId={product.id} />
      <VideoEmbed videoUrl={product.videoUrl} />
    </Container>
  );
};

export default ProductDetailPage;
