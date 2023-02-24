import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="Header-container">
    <div className="wave-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="image-wave"
      />
      <h1 className="wave-heading">Wave</h1>
    </div>
    <ul className="buttons-header">
      <li className="list-header">
        <Link to="/" className="nav-link">
          Home
        </Link>
      </li>
      <li className="list-header">
        <Link to="/about" className="nav-link">
          about
        </Link>
      </li>
      <li className="list-header">
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
