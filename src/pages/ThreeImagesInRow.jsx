import React from 'react';
import Carcare from '../assets/images/Carcare.jpg';
import gasspring from '../assets/images/gasspring.jpg';
import Airfreshner from '../assets/images/Airfreshner.jpg';

const ThreeImagesInRow = () => {
  return (
    <div style={{ display: 'flex', gap: '8px', marginTop: '50px' }}>
      <img
        src={Airfreshner}
        alt="Image 1"
        style={{ width: '33.33%', height: 'auto', objectFit: 'cover' }}
      />
      <img
        src={Carcare}
        alt="Image 2"
        style={{ width: '33.33%', height: 'auto', objectFit: 'cover' }}
      />
      <img
        src={gasspring}
        alt="Image 3"
        style={{ width: '33.33%', height: 'auto', objectFit: 'cover' }}
      />
    </div>
  );
};

export default ThreeImagesInRow;
