import React from 'react';
import SafetyBreakdownAssistance from '../assets/images/SafetyBreakdownAssistance.jpg';
import CARBODYFITTINGS from '../assets/images/CARBODYFITTINGS.jpg';
import WrapStickers from '../assets/images/WrapStickers.jpg';

const ThreeImagesInRow = () => {
  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      <img
        src={WrapStickers}
        alt="Image 1"
        style={{ width: '33.33%', height: 'auto', objectFit: 'cover' }}
      />
      <img
        src={SafetyBreakdownAssistance}
        alt="Image 2"
        style={{ width: '33.33%', height: 'auto', objectFit: 'cover' }}
      />
      <img
        src={CARBODYFITTINGS}
        alt="Image 3"
        style={{ width: '33.33%', height: 'auto', objectFit: 'cover' }}
      />
    </div>
  );
};

export default ThreeImagesInRow;
