import { Link } from 'react-router-dom'
import instagram from "../../assets/instagram.svg"
import facebook from "../../assets/facebook.svg"
import dribbble from "../../assets/dribbble.svg"
import twitter from "../../assets/twitter.svg"
import logo from "../../assets/trendzy-light.svg"
import './footer.css'

const Footer = () => {
  return (   
    <footer>
      <div className='footer-container'>
        <div className='container-wrap'>
          <div className='pages-links'>
        <h6>Pages</h6>
        <ul>
          <li>
            <Link to={'/'} style={{textDecoration: "none",color:"#fff"}}>Home</Link>
          </li>
          <li>
            <Link to={'about'} style={{textDecoration: "none",color:"#fff"}}>About</Link>
          </li>
          <li>
            <Link to={'shop-all'} style={{textDecoration: "none",color:"#fff"}}>Shop All</Link>
          </li>
          <li>
            <Link to={'blog'} style={{textDecoration: "none",color:"#fff"}}>Blog</Link>
          </li>
          <li>
            <Link to={'contact'} style={{textDecoration: "none",color:"#fff"}}>Contact</Link>
          </li>
          <li>
            <Link to={'privacy-policy'} style={{textDecoration: "none",color:"#fff"}}>Privacy Policy</Link>
          </li>
          <li>
            <Link to={'faqs'} style={{textDecoration: "none",color:"#fff"}}>FAQs</Link>
          </li>
        </ul>
          </div>
          <div className='contact-links'>
        <h6>Contact</h6>
        <p>example@gmail.com</p>
        <div className='social-links'>
          <div className='social-icon'>
            <img src={instagram} alt='instagram'/>
          </div>
          <div className='social-icon'>
            <img src={dribbble} alt='dribbble'/>
          </div>
          <div className='social-icon'>
            <img src={facebook} alt='facebook'/>
          </div>
          <div className='social-icon'>
            <img src={twitter} alt='twitter'/>
          </div>
        </div>
          </div>
          <div className='logo-input'>
            <img src={logo} alt='logo'/>
            <form className='input'>
              <h5>Subscribe and get 15% off your first order.</h5>
              <input type='email' placeholder='Enter your email'/>
              <button>Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer