import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import ShopAll from "./Pages/ShopAll/ShopAll";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";
import Blog from "./Pages/Blog/Blog";
import Contact from "./Pages/Contact/Contact";
import FAQs from "./Pages/FAQs/FAQs";
import PrivacyPolicy from "./Pages/Privacy Policy/PrivacyPolicy";
import Footer from "./Components/Footer/Footer";
import SingleBlog from "./Pages/SingleBlog/SingleBlog";
import Cart from "./Pages/Cart/Cart";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Shop-All" element={<ShopAll />} />
        <Route path="/category/:category" element={<ShopAll />} />
        <Route path="/product" element={<SingleProduct />}>
          <Route path=":productName" element={<SingleProduct />} />
        </Route>
        <Route path="/blogs" element={<Blog />}/>
        <Route path="/blog" element={<SingleBlog />}>
          <Route path=":blogName" element={<SingleBlog/>}/>
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cart" element={<Cart />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
