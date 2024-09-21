// components/ProductList.js
import { Grid } from '@mui/material';
import ProductCard from './ProductCard';
import { useRouter } from 'next/navigation';
// Mock Data (Replace this with actual API data)
const products = [
  { id: 1, name: 'Product 1', price: 20, rating: 4, category: 'electronics' },
  { id: 2, name: 'Product 2', price: 30, rating: 5, category: 'fashion' },
  { id: 3, name: 'Product 3', price: 15, rating: 3, category: 'books' },
  // Add more products here
];

const ProductList = ({ filters }) => {
    const router = useRouter()
  // Filter and sort products based on selected filters
  const filteredProducts = products
    .filter(
      (product) =>
        filters.category === 'all' || product.category === filters.category
    )
    .sort((a, b) =>
      filters.sort === 'price'
        ? a.price - b.price
        : filters.sort === 'rating'
        ? b.rating - a.rating
        : a.name.localeCompare(b.name)
    );

  return (
    <Grid container spacing={2}>
      {filteredProducts.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id} onClick={()=>router.push("/products/1")}>
          <ProductCard product={product}/>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
