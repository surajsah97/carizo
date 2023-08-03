import React from 'react';

const ShopByCategories = () => {
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '70px',
    width: '90%',
    position: 'relative',
    marginLeft: '10px',
    marginRight: '10px',
    marginTop: '20px',
  };

  const textStyle = {
    fontFamily: "'Abril Fatface', cursive", // Specify "Abril Fatface" as the font
    fontSize: '32px',
    background: 'primary pink',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  return (
    <div style={containerStyle}>
      <h1 style={textStyle}>SHOP BY CATEGORIES</h1>
    </div>
  );
};

export default ShopByCategories;
