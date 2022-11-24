import React from 'react';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import SearchIcon from '@mui/icons-material/Search';
const Header = () => {
    return (
        <div>
            <div className="header__logo">

            </div>
            <div className="header__search">
                <input type="text"></input>
            <SearchIcon/>
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
                <div className="nav__item">
                    
                <ShoppingBasketIcon/>
                  <span className="nav__itemLineTwo">0</span>
                    </div>
            </div>
        </div>
    );
}

export default Header;
