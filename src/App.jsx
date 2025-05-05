import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
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
import Login from "./Pages/Login/Login";
import { ToastContainer } from "react-toastify";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
	const location = useLocation();
	const isNotFoundPage =
		location.pathname === "/404" ||
		![
			"/",
			"/about",
			"/Shop-All",
			"/contact",
			"/faqs",
			"/privacy-policy",
			"/cart",
			"/login",
			"/blogs",
		].includes(
			location.pathname.split("/")[1]
				? `/${location.pathname.split("/")[1]}`
				: "/"
		);
	return (
		<>
			<ToastContainer />
			{!isNotFoundPage && <Navbar />}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/Shop-All" element={<ShopAll />} />
				<Route path="/category/:category" element={<ShopAll />} />
				<Route path="/product" element={<SingleProduct />}>
					<Route path=":productName" element={<SingleProduct />} />
				</Route>
				<Route path="/blogs" element={<Blog />} />
				<Route path="/blog" element={<SingleBlog />}>
					<Route path=":blogName" element={<SingleBlog />} />
				</Route>
				<Route path="/contact" element={<Contact />} />
				<Route path="/faqs" element={<FAQs />} />
				<Route path="/privacy-policy" element={<PrivacyPolicy />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/login" element={<Login />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			{!isNotFoundPage && <Footer />}
		</>
	);
}

export default App;
