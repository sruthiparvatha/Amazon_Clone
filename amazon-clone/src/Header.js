import React from "react";
import logo from "./images/logo-dark.svg";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if(user){
      // to sign out using firebase
      auth.signOut();
    }
  }
  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src={logo}></img>
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
        {/* Logo */}
      </div>
      <div className="header__nav">
        <Link to={!user && '/login'}>
        <div onClick={handleAuthentication} className="header__option">
  <span className="header__optionLineOne">Hello, {user? user.email.substring(0, (user.email.search(/@/))) : "Guest" }</span>
          <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In' }</span>
        </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">&Orders</span>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <span className="header__optionLineOne">
              <ShoppingCartOutlinedIcon />
            </span>
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
