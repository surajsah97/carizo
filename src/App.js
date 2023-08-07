import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ShopProductDetails from "./pages/ShopProductDetails";
import LoginForm from "./pages/LoginForm";
import RegistrationForm from "./pages/RegistrationForm";
import PageNotFound from "./pages/PageNotFound";
import CreateCategory from "./pages/CreateCategory";
import CreateSuperCategory from "./pages/CreateSuperCategory";
import ProductForms from './pages/ProductForms'
import CartPage from "./pages/Cartpage";
import CreateSubCategory from "./pages/CreateSubCatagory";
import CreateItemDetail from "./pages/CreateItemDetail";
import CreateItem from "./pages/CreateItem";
function App() {
  return (
    <>
     <ToastContainer/>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/app" element={<Home />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shopproductdetails" element={<ShopProductDetails />} />
          <Route path="/registrationform" element={<RegistrationForm />} />
          <Route path="/product/:id" element={<Shop />} />
          <Route path="/item/:id" element={<ShopProductDetails />} />
          {/* <Route path="/category" element={<CreateCategory />} />
          <Route path="/supercategory" element={<CreateSuperCategory />} /> */}
          <Route path="/cart" element={<div>Cart page</div>} />
          <Route path="/add-item" element={<ProductForms/>} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/cartpage" element={<CartPage />} />
          <Route path="/catagory/add" element={<CreateCategory/>}/>
          <Route path="/super-catagory/add" element={<CreateSuperCategory/>}/>
          <Route path="/sub-catagory/add" element={<CreateSubCategory/>}/>
          <Route path="/item-detail/add" element={<CreateItemDetail/>}/>
          <Route path="/item/add" element={<CreateItem/>}/>


          
          <Route path="*" element={<PageNotFound />} />

        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
