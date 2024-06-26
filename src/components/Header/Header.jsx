import CompanyLogo from "./svgs/CompanyLogo";
import SwiggyCorporate from "./svgs/SwiggyCorporate";
import Search from "./svgs/Search";
import Offers from "./svgs/Offers";
import Help from "./svgs/Help";
import SignIn from "./svgs/SignIn";
import Cart from "./svgs/Cart";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <CompanyLogo />
          <li className="nav-list-item">Other</li>
          <li className="nav-list-item">
            <SwiggyCorporate /> Swiggy Corporate
          </li>
          <li className="nav-list-item">
            <Search />
            Search
          </li>
          <li className="nav-list-item">
            <Offers />
            Offers
          </li>
          <li className="nav-list-item">
            <Help />
            Help
          </li>
          <li className="nav-list-item">
            <SignIn />
            Sign In
          </li>
          <li className="nav-list-item">
            <Cart />
            Cart
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
