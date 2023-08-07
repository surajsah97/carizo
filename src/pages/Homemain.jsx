import React, { useEffect, useState } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import carbodycover from '../assets/images/carbodycover.jpg';
import blind_spot from '../assets/images/blind_spot.jpg';
import car_sunshade from '../assets/images/car_sunshade.jpg';
import bumperprotectors from '../assets/images/bumperprotectors.jpg';
import cararmset from '../assets/images/cararmset.jpg';
import caraudiosystem from '../assets/images/caraudiosystem.jpg';
import cardoor from '../assets/images/cardoor.jpg';
import carhorns from '../assets/images/carhorns.jpg';
import carseat from '../assets/images/carseat.jpg';
import carsteeringknobs from '../assets/images/carsteeringknobs.jpg';
import carsteeringcover from '../assets/images/carsteeringcover.jpg';
import doorguard from '../assets/images/doorguard.jpg';
import doorvisiors from '../assets/images/doorvisiors.jpg';
import FLOORMATS from '../assets/images/FLOORMATS.jpg';
import garboot from '../assets/images/garboot.jpg';
import gelfreshner from '../assets/images/gelfreshner.jpg';
import mudflaps from '../assets/images/mudflaps.jpg';
import wheelcovers from '../assets/images/wheelcovers.jpg';
import axios from 'axios';
import { Link } from 'react-router-dom';

const texts = [
  'Car Body Cover',
  'Blind Spot Mirror',
  'Car Sunshade',
  'Bumper Protectors',
  'Car Armrest',
  'Car Audio System',
  'Car Door',
  'Car Horns',
  'Car Seat',
  'Car Steering Knobs',
  'Car Steering Cover',
  'Door Guard',
  'Door Visors',
  'Floor Mats',
  'Garbage Boot',
  'Gel Freshener',
  'Mud Flaps',
  'Wheel Covers',
];


let baseUrl=process.env.REACT_APP_BaseUrl


const MainCard = () => {
  const [catgory, SetCatgory] = useState([])
  useEffect(() => {
   axios.get(baseUrl+"/catagory").then(val=>{
if(val.data.status==1){
    SetCatgory(val.data.data)
}
   }).catch(err=>{
    
   })
  }, [])
  const cardStyle = {
    maxWidth: 1550,
    marginLeft: '20px',
    marginRight: '20px',
    background: 'none', // Transparent background
    boxShadow: 'none', // Remove shadow
  };

  return (
    <Card style={cardStyle}>
      <CardContent>
        <Grid container spacing={2}>
          {/* First Row */}
          <Grid container item xs={12} spacing={2}>
            {catgory.map((el,i)=>{
            return <><Link key={i} to={`/product/${el.id}`}>{renderImageWithText(i, el.image, el.name)}</Link> </>

            })}
            {/* {renderImageWithText(1, carbodycover, texts[0])}
            {renderImageWithText(2, blind_spot, texts[1])}
            {renderImageWithText(3, car_sunshade, texts[2])}
            {renderImageWithText(4, bumperprotectors, texts[3])}
            {renderImageWithText(5, cararmset, texts[4])}
            {renderImageWithText(6, caraudiosystem, texts[5])} */}
          {/* </Grid> */}

          {/* Second Row */}
          {/* <Grid container item xs={12} spacing={2}> */}
            {/* {renderImageWithText(7, cardoor, texts[6])}
            {renderImageWithText(8, carhorns, texts[7])}
            {renderImageWithText(9, carseat, texts[8])}
            {renderImageWithText(10, carsteeringknobs, texts[9])}
            {renderImageWithText(11, carsteeringcover, texts[10])}
            {renderImageWithText(12, doorguard, texts[11])}
            {renderImageWithText(13, doorvisiors, texts[12])}
            {renderImageWithText(14, FLOORMATS, texts[13])}
            {renderImageWithText(15, garboot, texts[14])}
            {renderImageWithText(16, gelfreshner, texts[15])}
            {renderImageWithText(17, mudflaps, texts[16])}
            {renderImageWithText(18, wheelcovers, texts[17])} */}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
const imageStyle = {
  width: '100%',
  height: 150,
  objectFit: 'cover',
  transition: 'transform 0.2s ease-in-out', // Add transition effect
};

const handleImageHover = (event) => {
  event.target.style.transform = 'scale(1.1)'; // Scale up the image on hover
};

const handleImageLeave = (event) => {
  event.target.style.transform = 'scale(1)'; // Reset the scale when leaving hover
};

const renderImageWithText = (imageNumber, imageURL, caption) => {
  return (
    <Grid item xs={0} key={imageNumber}>
      <CardMedia
        component="img"
        image={imageURL || `/path/to/your/image-${imageNumber}.jpg`}
        alt={`Image ${imageNumber}`}
        height="150"
        style={imageStyle}
        onMouseEnter={handleImageHover}
        onMouseLeave={handleImageLeave}
      />
      <CardContent>
        <Typography variant="subtitle1" align="center" color='#c51414' fontFamily='Teko'>
          {caption}
        </Typography>
      </CardContent>
    </Grid>
  );
};

export default MainCard;


// const renderImageWithText = (imageNumber, imageURL, caption) => {
//   return (
//     <Grid item xs={4} key={imageNumber}>
//       <CardMedia
//         component="img"
//         image={imageURL || `/path/to/your/image-${imageNumber}.jpg`}
//         alt={`Image ${imageNumber}`}
//         height="150"
//         style={imageStyle}
//         onMouseEnter={handleImageHover}
//         onMouseLeave={handleImageLeave}
//       />
//       <CardContent>
//         <Typography variant="subtitle1" align="center" color='#c51414' fontFamily='Teko'>
//           {caption}
//         </Typography>
//       </CardContent>
//     </Grid>
//   );
// };