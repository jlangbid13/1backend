import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Booking Schedule</h1>
        </Link>
        {/* Button to redirect to the home page */}
        <Link to="/" className="button-home">
          Logout
        </Link>
      </div>
    </header>
  )
}

export default Navbar;
