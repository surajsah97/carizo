// import React from 'react';
// import { Grid, Card, CardMedia, CardContent, Typography, Link } from '@mui/material';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import sunvisiortissue from '../assets/images/sunvisiortissue.jpg';
// import blacktissue from '../assets/images/blacktissue.jpg';
// import bottle from '../assets/images/bottle.jpg';
// import lock from '../assets/images/lock.jpg';
// import bluebox from '../assets/images/bluebox.jpg';
// import doorguard from '../assets/images/doorguard.jpg';

// const Newarrival = () => {
//   return (
//     <Card style={{ maxWidth: 1500, margin: '0 auto', padding: 16 }}>
//       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
//         <Typography style={{ marginBottom: 16 ,fontWeight: '800'}}>
//           New Arrivals
//         </Typography>
//         <Link href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
//           <Typography variant="body1" style={{ marginRight: 4 , fontWeight: '800'}}>
//             See All
//           </Typography>
//           <ChevronRightIcon fontSize="small" />
//         </Link>
//       </div>
//       <Grid container spacing={2} style={{ marginTop: 2 }}>
//         {renderImageCard(1, 'Product 1', '500', 'Small description 1', sunvisiortissue)}
//         {renderImageCard(2, 'Product 2', '500', 'Small description 2', blacktissue)}
//         {renderImageCard(3, 'Product 3', '500', 'Small description 3', bottle)}
//         {renderImageCard(4, 'Product 4', '500', 'Small description 4', lock)}
//         {renderImageCard(5, 'Product 5', '500', 'Small description 5', bluebox)}
//         {renderImageCard(6, 'Cardoor', '700', 'Small description 5', doorguard)}
//       </Grid>
//     </Card>
//   );
// };

// const renderImageCard = (imageNumber, productName, price, description, imageURL) => {
//   return (
//     <Grid item xs={2} key={imageNumber}>
//       <Card>
//         <CardMedia
//           component="img"
//           image={imageURL}
//           alt={`Image ${imageNumber}`}
//           height="200"
//         />
//         <CardContent>
//           <Typography variant="h6" component="h3">
//             {productName}
//           </Typography>
//           <Typography variant="subtitle1" style={{ color: 'green' }}>
//             $ {price}
//           </Typography>
//           <Typography variant="body2" color="textSecondary">
//             {description}
//           </Typography>
//         </CardContent>
//       </Card>
//     </Grid>
//   );
// };

// export default Newarrival;
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import sunvisiortissue from '../assets/images/sunvisiortissue.jpg';
import blacktissue from '../assets/images/blacktissue.jpg';
import bottle from '../assets/images/bottle.jpg';
import lock from '../assets/images/lock.jpg';
import bluebox from '../assets/images/bluebox.jpg';
import doorguard from '../assets/images/doorguard.jpg';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';

const productData = [
  {
    name: 'Sun Visor Tissue',
    description: 'Description for Product 1',
    price: '$50.00',
    image: sunvisiortissue,
  },
  {
    name: 'Door Guard',
    description: 'Description for Product 2',
    price: '$60.00',
    image: doorguard,
  },
  {
    name: 'Bottle',
    description: 'Description for Product 3',
    price: '$45.00',
    image: bottle,
  },
  {
    name: 'Lock',
    description: 'Description for Product 4',
    price: '$55.00',
    image: lock,
  },
  {
    name: 'BlueBox',
    description: 'Description for Product 5',
    price: '$70.00',
    image: bluebox,
  },
  {
    name: 'Door Guard',
    description: 'Description for Product 6',
    price: '$65.00',
    image: doorguard,
  },
];

const ProductSlider = () => {
  const [data, setdata] = useState([])
  const baseUrl=process.env.REACT_APP_BaseUrl
  useEffect(()=>{
    axios.get(baseUrl+"/item").then(res=>{
      if(res.data.status==1){
        
        setdata(res.data.data)
      }
    })
    .catch(err=>{
      console.log({err});
    })
      },[])
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
  };

  const buttonStyle = {
    backgroundColor: '#c51414',
    color: '#ffffff',
    fontWeight: '800',
    textTransform: 'none',
  };

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', marginTop:'70px', marginBottom:'40px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <Typography variant="h4" style={{ color: '#c51414', fontWeight: '800', fontFamily: 'Teko' }}>
          Featured Product
        </Typography>
        <Button
          variant="contained"
          endIcon={<ChevronRightIcon />}
          style={buttonStyle}
        >
          View All
        </Button>
      </div>
      <Slider {...settings}>
        {data.map((product, index) => (
          <div key={index} style={{ padding: '0 8px' }}>
            <div style={{ position: 'relative', textAlign: 'left' }}>
              <img
                src={product.image}
                alt={product.name}
                style={{ width: '100%', height: 200, objectFit: 'cover', paddingRight: '26px' }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  padding: '4px 8px',
                  fontFamily: 'Teko',
                  fontWeight: 'bold',
                }}
              >
                CARIZO
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
              <Typography variant="h6" style={{ fontFamily: 'Teko', fontWeight: 'bold' }}>
                {product.name}
              </Typography>
              {/* <img src={heartIcon} alt="Heart Icon" style={{ width: 20, height: 20, cursor: 'pointer' }} /> */}
            </div>
            <Typography variant="body1" style={{ fontFamily: 'Teko' }}>
              {product.description}
            </Typography>
            <Typography variant="body1" style={{ color: '#c51414', fontWeight: '800', fontFamily: 'Teko' }}>
              {product.price}
            </Typography>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;

