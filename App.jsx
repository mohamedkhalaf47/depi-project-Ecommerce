import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home"
import About from "./Pages/About"
import ShopAll from "./Pages/ShopAll"
import Shop from "./Pages/Shop"
import Blog from "./Pages/Blog"
import Contact from "./Pages/Contact"
import FAQs from './Pages/FAQs'
import PrivacyPolicy from './Pages/PrivacyPolicy'
import Product from './Pages/Product'
import Footer from './Components/Footer/Footer'


function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/shop-all' element={<ShopAll/>}/>
        <Route path='/category/men' element={<Shop category="men"/>}/>
        <Route path='/category/women' element={<Shop category="women"/>}/>
        <Route path='/category/kid' element={<Shop category="kid"/>}/>
        <Route path=':productId' element={<Product />}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/faqs' element={<FAQs/>}/>
        <Route path='/privacy-policy' element={<PrivacyPolicy />}/>
      </Routes>
      <Footer />
    </>
    
  )
}

export default App
