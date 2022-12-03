import React from 'react';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import SearchIcon from '@mui/icons-material/Search';
import StorefrontIcon from '@mui/icons-material/Storefront';
import "./Header.css";
import { NavLink } from 'react-router-dom';
import {useStateValue} from "../StateProvider"
const Header = () => {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className='header'>
            <NavLink to="/" className="navlink" >
            <div className="header__logo">
           <StorefrontIcon className='header__logoImage' fontSize='large'/>
           <h2 className='header__logoTitle'>myShop</h2>
            </div>
            </NavLink>
            
            <div className="header__search">
                <input type="text" className='header__searchInput'></input>
            <SearchIcon className='header__searchIcon'/>
            </div>
            <div className="header__nav">
                <div className="nav__item">
                  <span className="nav__itemLineOne">Hello Guest</span>
                  <span className="nav__itemLineTwo">Sign In</span>

                </div>
                <div className="nav__item">
                    
                  <span className="nav__itemLineOne">Your</span>
                  <span className="nav__itemLineTwo">Shop</span>
                </div>
                <NavLink to="/CheakOut" className = "navlink">
                <div className="nav__itemBasket"> 
                <ShoppingBasketIcon fontSize='large'/>
                <span className="nav__itemLineTwo nav__basketCount">{basket.length}</span>
                    </div>
                </NavLink>
                
            </div>
        </div>
    );
}

export default Header;
