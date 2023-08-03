import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Grid, Typography, Button, TextField } from '@mui/material';
import insta_img4 from '../assets/images/insta_img4.jpg';
import insta_img3 from '../assets/images/insta_img3.jpg';
import insta_img2 from '../assets/images/insta_img2.jpg';
import { Link } from 'react-router-dom';

const ProductDetails = ({mappingItem}) => {
  // Sample data for the cards and size variants
  const products = [
    { id: 1, image: insta_img4 },
    { id: 2, image: insta_img3 },
    { id: 3, image: insta_img2 },
  ];

  const sizeVariants = ['Small', 'Medium', 'Large'];

  // State for the PIN availability check
  const [pinCode, setPinCode] = useState('');
  const [isAvailable, setIsAvailable] = useState(false);
  const [quantity, setQuantity] = useState(1);

  // Function to check product availability based on the entered PIN
  const checkAvailability = () => {
    // Implement your API call or logic here to check product availability
    // For now, let's set it randomly
    setIsAvailable(Math.random() < 0.5);
  };

  const handleAdd = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleSubtract = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div>
      <Grid container spacing={2}>
        {/* Three small cards */}
        
        {mappingItem?Object.keys(mappingItem).map((product) => (
          <Grid key={product} item xs={4}>
            <Link to={`/item/${product}`}>
            <Card>
              <CardMedia component="img" height="50" width="100" image={mappingItem[product]} alt={`Product ${product}`} />
              {/* <CardContent> */}
                {/* <Typography variant="h6" component="div">
                  {`Product ${product.id}`} */}
                {/* </Typography> */}
              {/* </CardContent> */}
            </Card>
            </Link>
          </Grid>
        )):<></>}
      </Grid>

      {/* Size variant section */}
      {/* <Typography variant="h6">Size Variants:</Typography>
      {sizeVariants.map((size) => (
        <Button key={size} variant="outlined" sx={{ mx: 1, my: 1 }}>
          {size}
        </Button>
      ))} */}

      {/* Quantity control section */}
      {/* <Typography variant="h6">Quantity:</Typography>
      <Button variant="outlined" sx={{ mx: 1 }} onClick={handleSubtract}>
        -
      </Button>
      <TextField
        label="Quantity"
        variant="outlined"
        value={quantity}
        sx={{ mx: 1, width: '50px', textAlign: 'center' }}
        disabled
      />
      <Button variant="outlined" sx={{ mx: 1 }} onClick={handleAdd}>
        +
      </Button> */}

      {/* Availability check */}
      <Typography variant="h6" mt={3}>
        Check Product Availability:
      </Typography>
      <TextField
        label="Enter PIN"
        variant="outlined"
        value={pinCode}
        onChange={(e) => setPinCode(e.target.value)}
        sx={{ mr: 1 }}
      />
      <Button variant="contained" onClick={checkAvailability}>
        Check
      </Button>
      {isAvailable ? (
        <Typography variant="body1" sx={{ mt: 2, color: 'green' }}>
          Product is available at your PIN code.
        </Typography>
      ) : (
        <Typography variant="body1" sx={{ mt: 2, color: 'red' }}>
          Product is not available at your PIN code.
        </Typography>
      )}
    </div>
  );
};

export default ProductDetails;
