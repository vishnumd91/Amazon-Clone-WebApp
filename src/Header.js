import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    const [{ basket, user }] = useStateValue();

    const handleAuthenticaton = () => {
      if (user) {
        auth.signOut();
      }
    }
    // console.log('Basket =>', basket)
    return (
        <nav className = 'header'>
            {/* Amazon Logo with link to home page */}
            <Link to = '/'>
                <img className = 'header__logo'
                src = 'http://pngimg.com/uploads/amazon/amazon_PNG11.png'
                alt = '' />
            </Link>

            {/* Search Box with search Icon */}
            <div className = 'header__search'>
                <input type = 'text' className = 'header__searchInput'></input>
                <SearchIcon className = 'header__searchIcon'></SearchIcon>
            </div>

            {/* 4 Links in nav bar with cart symbol */}
            <div className = 'header__nav'>
            <Link to = {!user && '/login'} className = 'header__link'>
                <div onClick = { handleAuthenticaton } className = 'header__option'>
                    <span className = 'optionLineOne'>Hello {!user ? 'Guest' : user.email}</span>
                    <span className = 'optionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
                </div>
               
            </Link>

            <Link to = '/' className = 'header__link'>
                <div className = 'header__option'>
                <span className = 'optionLineOne'>Returns</span>
                <span className = 'optionLineTwo'>& Orders</span>
                </div>
            </Link>

            <Link to = '/checkout' className = 'header__link'>
                <div className = 'header__option'>
                <span className = 'optionLineOne'>Your</span>
                <span className = 'optionLineTwo'>Prime</span>
                </div>
            </Link>

            <Link to = '/checkout'>
                <div className = 'header__optionBasket'>
                    <ShoppingBasketIcon></ShoppingBasketIcon>
                    <span className = 'header__optionLineTwo header__basketCount'>{ basket?.length }</span>
                </div>
            </Link>

            </div>
           
        </nav>
    )
}

export default Header
