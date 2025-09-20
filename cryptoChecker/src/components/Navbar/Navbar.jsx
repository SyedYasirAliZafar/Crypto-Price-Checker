import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css";
import logo from '../../assets/logo.png'
import arrow_icon from '../../assets/arrow_icon.png'
import { CoinContext } from '../../context/CoinContext';


function Navbar() {
  const { setCurrency } = useContext(CoinContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const currencyHandler = (event) => {
    switch (event.target.value) {
      case 'usd': setCurrency({ name: 'usd', symbol: '$' }); break;
      case 'eur': setCurrency({ name: 'eur', symbol: '€' }); break;
      case 'jpy': setCurrency({ name: 'jpy', symbol: '¥' }); break;
      case 'gbp': setCurrency({ name: 'gbp', symbol: '£' }); break;
      case 'pkr': setCurrency({ name: 'pkr', symbol: 'Rs' }); break;
      case 'inr': setCurrency({ name: 'inr', symbol: '₹' }); break;
      case 'cad': setCurrency({ name: 'cad', symbol: 'C$' }); break;
      case 'aud': setCurrency({ name: 'aud', symbol: 'A$' }); break;
      default: setCurrency({ name: 'usd', symbol: '$' }); break;
    }
  };

  return (
    <div className='navbar'>
      {/* Logo */}
      <Link to="/">
        <img src={logo} alt="Crypto Logo" className='logo' />
      </Link>

      {/* Hamburger (mobile only) */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Links + Right Side (inside menu for mobile) */}
      <div className={menuOpen ? "nav-menu open" : "nav-menu"}>
        <ul className="nav-links">
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/features" onClick={() => setMenuOpen(false)}>Features</Link></li>
          <li><Link to="/pricing" onClick={() => setMenuOpen(false)}>Pricing</Link></li>
          <li><Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link></li>
        </ul>

        {/* Right Side */}
        <div className="nav-right">
          <select onChange={currencyHandler}>
            <option value="usd">USD</option>
            <option value="eur">Euro</option>
            <option value="pkr">PKR</option>
            <option value="jpy">JPY</option>
            <option value="gbp">GBP</option>
            <option value="inr">INR</option>
            <option value="aud">AUD</option>
            <option value="cad">CAD</option>
          </select>
          <button>
            Sign Up <img src={arrow_icon} alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
