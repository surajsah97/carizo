import React from 'react';
import Typography from '@mui/material/Typography';

const ProductHeadingTwo = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom:'10px',
    marginTop:'10px',
  };
  const productStyle = {
    color: 'rgba(128, 128, 128, 0.6)',
    fontFamily: 'Teko, sans-serif', // Use Teko font
    zIndex: '1',
    position: 'relative',
    fontSize: '4.5rem',
    letterSpacing: '4px',
    background: 'transparent', // Transparent background
    marginBottom: '10px', // Add some margin to the product heading
  };

  const categoryStyle = {
    color: '#c51414',
    fontFamily: 'Teko, sans-serif', // Use Teko font
    zIndex: '2',
    position: 'relative',
    fontSize: '2.5rem',
    letterSpacing: '1px',
    marginBottom: '15px',
    marginTop: '-43px', // Adjust the value to move the second text above the first text
    background: 'transparent', // Transparent background
  };

  return (
    <div style={containerStyle} className='align-items-center'>
      <Typography variant="h1" style={productStyle}>
        PRODUCT
      </Typography>
      <Typography variant="h1" style={categoryStyle}>
        VIEW ALL CATEGORY
      </Typography>
    </div>
  );
};

export default ProductHeadingTwo;
