import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <>
      <div className="Header">
        <img
          src="https://images.crunchbase.com/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1479829522/bxpgav8mvdsibvxctd1d.jpg"
          alt="FoodTopia"
          className="Logo"
        />
        <ul className="Header-Links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
