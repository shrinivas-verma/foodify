import { Link } from 'react-router-dom';
import { CartIcon, HomeIcon, SearchIcon } from './icons/index';
const Header = () => {
  return (
    <>
      <div className="nav-container flex flex-row items-center top-0 left-0 w-full justify-between bg-sky-100 mb-5">
        <div className="Logo-container w-12 h-12 overflow-hidden flex items-center rounded-full">
          <img
            src="https://images.crunchbase.com/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1479829522/bxpgav8mvdsibvxctd1d.jpg"
            alt="Foodify"
            className="w-full h-full object-contain block flex-shrink-0"
          />
        </div>

        <div className="flex-1 flex justify-center mx-10 ">
          <div className="w-full max-w-xl">
            <div className="relative">
              <div className="h-10 rounded-full bg-sky-200/70 flex items-center justify-center px-3">
                <SearchIcon className="w-5 h-5 text-sky-800" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="search mx-6">
          <div className="w-full max-w-xl">

            <div className="w-full h-9 rounded-full flex items-center justify-center bg-sky-200">
              <SearchIcon className="w-5 h-5 text-sky-700" aria-hidden="true" />
            </div>
          </div>
        </div> */}


        <div className="links-container flex align-center justify-between gap-x-10">

          <Link to="/" className='flex items-center'>
            <HomeIcon></HomeIcon>
          </Link>
          <Link to="/about">About us</Link>
          <Link to="/contact">Contact us</Link>
          <Link to="/cart" className='mr-10 flex items-center'>
            <CartIcon></CartIcon>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
