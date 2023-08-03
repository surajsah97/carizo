import React, { useState } from 'react';
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Button,
  TextField,
  IconButton,
  Select,
  MenuItem,
  FormControl,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import blindSpotImage from '../assets/images/blind_spot.jpg'; // Change the path to the correct image

const CartPage = () => {
  // Sample data for the cart items
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Blind Spot', price: 20, quantity: 2, image: blindSpotImage, description: 'Product 1 description' },
    { id: 2, name: 'Product 2', price: 15, quantity: 1, image: '/path/to/image2.jpg', description: 'Product 2 description' },
    { id: 3, name: 'Product 3', price: 25, quantity: 3, image: '/path/to/image3.jpg', description: 'Product 3 description' },
    { id: 4, name: 'Product 4', price: 18, quantity: 1, image: '/path/to/image4.jpg', description: 'Product 4 description' },
    { id: 5, name: 'Product 5', price: 30, quantity: 2, image: '/path/to/image5.jpg', description: 'Product 5 description' },
    // Add more cart items as needed
  ]);

  // Function to calculate the total price of all items in the cart
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Calculate the total quantity of products in the cart
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <Card style={{ display: 'flex', justifyContent: 'space-between', margin: '2rem', padding: '2rem' }}>
      {/* Left Side */}
      <div style={{ flex: '3', marginRight: '1rem' }}>
        <Typography variant="h4" gutterBottom>
          <strong>MY CART</strong> ({totalQuantity} Items)
        </Typography>
        <Divider />
        {cartItems.map((item) => (
          <Card key={item.id} style={{ display: 'flex', marginBottom: '1.5rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <CardMedia component="img" image={item.image} alt={item.name} style={{ width: '320px', height: '220px' }} />
            <CardContent style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
              <Typography variant="h6">{item.name}</Typography>
              <Typography variant="body2" color="textSecondary">
                {item.description}
              </Typography>
              <div style={{ display: 'flex', alignItems: 'center', marginTop: 'auto' }}>
                <Typography variant="body1" style={{ marginRight: '8px' }}>
                  Price: ${item.price}
                </Typography>
                <IconButton aria-label="Add to Favorites" size="small" style={{ marginRight: '8px' }}>
                  <FavoriteIcon />
                </IconButton>
                <Typography variant="body2">Save for Later</Typography>
              </div>
              <FormControl variant="outlined" style={{ marginTop: '0.5rem' }}>
                <Select
                  value={item.quantity}
                  onChange={(e) => {
                    const newQuantity = e.target.value;
                    setCartItems((prevCartItems) =>
                      prevCartItems.map((prevItem) =>
                        prevItem.id === item.id ? { ...prevItem, quantity: newQuantity } : prevItem
                      )
                    );
                  }}
                >
                  {[...Array(10).keys()].map((number) => (
                    <MenuItem key={number} value={number + 1}>
                      {number + 1}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Right Side */}
      <div style={{ flex: '1', backgroundColor: '#f2f2f2', padding: '1rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <Typography variant="h6" gutterBottom>
          Order Summary
        </Typography>
        <Divider />
        {/* Add location, phone number, name, promo code fields */}
        <Typography variant="body1" gutterBottom>
          <TextField label="Enter your location" fullWidth margin="normal" />
        </Typography>
        <Typography variant="body1" gutterBottom>
          <TextField label="Phone Number" fullWidth margin="normal" />
        </Typography>
        <Typography variant="body1" gutterBottom>
          <TextField label="Name" fullWidth margin="normal" />
        </Typography>
        <Typography variant="body1" gutterBottom>
          <TextField label="ADD PROMO code" fullWidth margin="normal" />
        </Typography>

        <div style={{ display: 'flex', justifyContent: 'center', margin: '1rem 0' }}>
          {/* Add logos of payment methods here */}
          <img src="https://via.placeholder.com/50" alt="Visa" style={{ margin: '0 0.5rem' }} />
          <img src="https://via.placeholder.com/50" alt="PayPal" style={{ margin: '0 0.5rem' }} />
          <img src="https://via.placeholder.com/50" alt="Debit Card" style={{ margin: '0 0.5rem' }} />
          <img src="https://via.placeholder.com/50" alt="Credit Card" style={{ margin: '0 0.5rem' }} />
          <img src="https://via.placeholder.com/50" alt="BHIM UPI" style={{ margin: '0 0.5rem' }} />
        </div>

        <Button variant="contained" color="primary" fullWidth style={{ marginTop: '1rem', backgroundColor: 'pink' }}>
          Buy Now
        </Button>
      </div>
    </Card>
  );
};

export default CartPage;




// import React from 'react'

// const Cartpage = () => {
//   return (
//     <div>
//       {/* // <!-- START SECTION BREADCRUMB --> */}
//     <div class="breadcrumb_section bg_gray page-title-mini">
//         <div class="container">
//           {/* <!-- STRART CONTAINER --> */}
//             <div class="row align-items-center">
//               <div class="col-md-6">
//                     <div class="page-title">
//                     <h1>Shopping Cart</h1>
//                     </div>
//                 </div>
//                 <div class="col-md-6">
//                     <ol class="breadcrumb justify-content-md-end">
//                         <li class="breadcrumb-item"><a href="#">Home</a></li>
//                         {/* <!--<li class="breadcrumb-item"><a href="#">Pages</a></li>--> */}
//                         <li class="breadcrumb-item active">Shopping Cart</li>
//                     </ol>
//                 </div>
//             </div>
//         </div>
//         {/* <!-- END CONTAINER--> */}
//     </div>
//     {/* <!-- END SECTION BREADCRUMB --> */}
    
//     {/* <!-- START MAIN CONTENT --> */}
//     <div class="main_content">
    
//     {/* <!-- START SECTION SHOP --> */}
//     <div class="section">
//       <div class="container">
//             <div class="row">
//                 <div class="col-12">
//                     <div class="table-responsive shop_cart_table">
//                       <div class="table">
//                           <thead>
//                               <tr>
//                                   <th class="product-thumbnail">&nbsp;</th>
//                                     <th class="product-name">Product</th>
//                                     <th class="product-price">Price</th>
//                                     <th class="product-quantity">Quantity</th>
//                                     <th class="product-subtotal">Total</th>
//                                     <th class="product-remove">Remove</th>
//                                 </tr>
//                             </thead>
//                             <>
//                               <tr>
//                                   <td class="product-thumbnail"><a href="#"><img src="assets/images/product_img1.jpg" alt="product1"/></a></td>
//                                     <td class="product-name" data-title="Product"><a href="#">Blue Dress For Woman</a></td>
//                                     <td class="product-price" data-title="Price">$45.00</td>
//                                     <td class="product-quantity" data-title="Quantity"><div class="quantity">
//                                     <input type="button" value="-" class="minus"/>
//                                     <input type="text" name="quantity" value="2" title="Qty" class="qty" size="4"/>
//                                     <input type="button" value="+" class="plus"/>
//                                   </div>
//                                     <td class="product-subtotal" data-title="Total">$90.00</td>
//                                     <td class="product-remove" data-title="Remove"><a href="#"><i class="ti-close"></i></a></td>
                                
//                                 <tr>
//                                   <td class="product-thumbnail"><a href="#"><img src="assets/images/product_img2.jpg" alt="product2"/></a></td>
//                                     <td class="product-name" data-title="Product"><a href="#">Lether Gray Tuxedo</a></td>
//                                     <td class="product-price" data-title="Price">$55.00</td>
//                                     <td class="product-quantity" data-title="Quantity"><div class="quantity">
//                                     <input type="button" value="-" class="minus"/>
//                                     <input type="text" name="quantity" value="1" title="Qty" class="qty" size="4"/>
//                                     <input type="button" value="+" class="plus"/>
//                                   </div></td>
//                                     <td class="product-subtotal" data-title="Total">$55.00</td>
//                                     <td class="product-remove" data-title="Remove"><a href="#"><i class="ti-close"></i></a></td>
//                                 </tr>
//                                 <tr>
//                                   <td class="product-thumbnail"><a href="#"><img src="assets/images/product_img3.jpg" alt="product3"/></a></td>
//                                     <td class="product-name" data-title="Product"><a href="#">woman full sliv dress</a></td>
//                                     <td class="product-price" data-title="Price">$68.00</td>
//                                     <td class="product-quantity" data-title="Quantity"><div class="quantity">
//                                     <input type="button" value="-" class="minus"/>
//                                     <input type="text" name="quantity" value="3" title="Qty" class="qty" size="4"/>
//                                     <input type="button" value="+" class="plus"/>
//                                   </div></td>
//                                     <td class="product-subtotal" data-title="Total">$204.00</td>
//                                     <td class="product-remove" data-title="Remove"><a href="#"><i class="ti-close"></i></a></td>
//                                 </tr>
//                             <tfoot>
//                               <tr>
//                                   <td colspan="6" class="px-0">
//                                       <div class="row no-gutters align-items-center">
    
//                                           <div class="col-lg-4 col-md-6 mb-3 mb-md-0">
//                                                 <div class="coupon field_form input-group">
//                                                     <input type="text" value="" class="form-control form-control-sm" placeholder="Enter Coupon Code.."/>
//                                                     <div class="input-group-append">
//                                                       <button class="btn btn-fill-out btn-sm" type="submit">Apply Coupon</button>
//                                                     </div>
//                                                 </div>
//                                           </div>
//                                             <div class="col-lg-8 col-md-6 text-left text-md-right">
//                                                 <button class="btn btn-line-fill btn-sm" type="submit">Update Cart</button>
//                                             </div>
//                                         </div>
//                                     </td>
//                                 </tr>
//                             </tfoot>
//                             </td></tr>
//                         {/* </table> */}
                      
            
//             <div class="row">
//                 <div class="col-12">
//                   <div class="medium_divider"></div>
//                   <div class="divider center_icon"><i class="ti-shopping-cart-full"></i></div>
//                   <div class="medium_divider"></div>
//                 </div>
//             </div>
//             <div class="row">
//               <div class="col-md-6">
//                   <div class="heading_s1 mb-3">
//                     <h6>Calculate Shipping</h6>
//                     </div>
//                     <form class="field_form shipping_calculator">
//                         <div class="form-row">
//                             <div class="form-group col-lg-12">
//                                 <div class="custom_select">
//                                     <select class="form-control">
//                                         <option value="">Choose a State...</option>
//                                          <option value="Andhra Pradesh">Andhra Pradesh</option>
//     <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
//     <option value="Arunachal Pradesh">Arunachal Pradesh</option>
//     <option value="Assam">Assam</option>
//     <option value="Bihar">Bihar</option>
//     <option value="Chandigarh">Chandigarh</option>
//     <option value="Chhattisgarh">Chhattisgarh</option>
//     <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
//     <option value="Daman and Diu">Daman and Diu</option>
//     <option value="Delhi">Delhi</option>
//     <option value="Lakshadweep">Lakshadweep</option>
//     <option value="Puducherry">Puducherry</option>
//     <option value="Goa">Goa</option>
//     <option value="Gujarat">Gujarat</option>
//     <option value="Haryana">Haryana</option>
//     <option value="Himachal Pradesh">Himachal Pradesh</option>
//     <option value="Jammu and Kashmir">Jammu and Kashmir</option>
//     <option value="Jharkhand">Jharkhand</option>
//     <option value="Karnataka">Karnataka</option>
//     <option value="Kerala">Kerala</option>
//     <option value="Madhya Pradesh">Madhya Pradesh</option>
//     <option value="Maharashtra">Maharashtra</option>
//     <option value="Manipur">Manipur</option>
//     <option value="Meghalaya">Meghalaya</option>
//     <option value="Mizoram">Mizoram</option>
//     <option value="Nagaland">Nagaland</option>
//     <option value="Odisha">Odisha</option>
//     <option value="Punjab">Punjab</option>
//     <option value="Rajasthan">Rajasthan</option>
//     <option value="Sikkim">Sikkim</option>
//     <option value="Tamil Nadu">Tamil Nadu</option>
//     <option value="Telangana">Telangana</option>
//     <option value="Tripura">Tripura</option>
//     <option value="Uttar Pradesh">Uttar Pradesh</option>
//     <option value="Uttarakhand">Uttarakhand</option>
//     <option value="West Bengal">West Bengal</option>
                                
//                                     </select>
//                                 </div>
//                             </div>
//                         </div>
//                         <div class="form-row">
//                             <div class="form-group col-lg-6">
//                                 <input required="required" placeholder="State / Country" class="form-control" name="name" type="text"/>
//                             </div>
//                             <div class="form-group col-lg-6">
//                                 <input required="required" placeholder="PostCode / ZIP" class="form-control" name="name" type="text"/>
//                             </div>
//                         </div>
//                         <div class="form-row">
//                             <div class="form-group col-lg-12">
//                                 <button class="btn btn-fill-line" type="submit">Update Totals</button>
//                             </div>
//                         </div>
//                     </form>
//                 </div>
//                 <div class="col-md-6">
//                   <div class="border p-3 p-md-4">
//                         <div class="heading_s1 mb-3">
//                             <h6>Cart Totals</h6>
//                         </div>
//                         <div class="table-responsive">
//                             <table class="table">
//                                 <tbody>
//                                     <tr>
//                                         <td class="cart_total_label">Cart Subtotal</td>
//                                         <td class="cart_total_amount">$349.00</td>
//                                     </tr>
//                                     <tr>
//                                         <td class="cart_total_label">Shipping</td>
//                                         <td class="cart_total_amount">Free Shipping</td>
//                                     </tr>
//                                     <tr>
//                                         <td class="cart_total_label">Total</td>
//                                         <td class="cart_total_amount"><strong>$349.00</strong></td>
//                                     </tr>
//                                 </tbody>
//                             </table>
//                         </div>
//                         <a href="checkout.php" class="btn btn-fill-out">Proceed To CheckOut</a>
//                     </div>
//                 </div>
//             </div>
            
//        </td></tr></tbody></table>
//    </div></div></div></div></div>
    
    
    
//   )
// }

// export default Cartpage;